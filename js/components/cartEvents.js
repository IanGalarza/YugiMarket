import { addToCart, removeFromCartByName, clearCart, isInCart, getCart, setCart } from '../components/cart.js';
import { updateCartUI } from '../components/ui.js';
import { saveCartToStorage } from '../components/storage.js';

export function registerEvents() {

    $(document).on("click", ".card", function () {
        const imgSrc = $(this).find("img").attr("src");
        const name = $(this).find("p").text();
        const price = 3500;

        if (isInCart(name)) {
            removeFromCartByName(name);
            $(this).removeClass("selected-card");
        } else {
            addToCart({ name, imgSrc, price });
            $(this).addClass("selected-card");
        }

        saveCartToStorage(getCart());
        updateCartUI();
    });

    $(document).on("click", ".remove-item", function () {
        const index = $(this).data("index");
        const item = getCart()[index];
        removeFromCartByName(item.name);
        saveCartToStorage(getCart());
        updateCartUI();
    });

    $(document).on("click", ".clear-cart-button", function () {
        clearCart();
        saveCartToStorage(getCart());
        updateCartUI();
    });

    $('#cart-icon').on('click', function () {
        $('#cart-preview').toggleClass('hidden');
    });

    $(document).on('click', function (e) {
        const isInsideCart = $(e.target).closest('#cart-preview').length > 0;
        const isCartIcon = $(e.target).closest('.cart-icon-container').length > 0;
        const isCard = $(e.target).closest('.card').length > 0;
        const isRemoveBtn = $(e.target).closest('.remove-item').length > 0;
        const isQtyButton = $(e.target).closest('.qty-plus, .qty-minus').length > 0;

        if (!isInsideCart && !isCartIcon && !isCard && !isRemoveBtn && !isQtyButton) {
            $('#cart-preview').addClass('hidden');
        }
    });

    $(document).on("click", ".qty-plus", function () {
        const index = $(this).data("index");
        const cart = getCart();
        cart[index].quantity = (cart[index].quantity || 1) + 1;

        setCart(cart); 
        saveCartToStorage(cart);
        updateCartUI();
    });

    $(document).on("click", ".qty-minus", function () {
        const index = $(this).data("index");
        const cart = getCart();
        const currentQty = cart[index].quantity || 1;

        if (currentQty > 1) {
            cart[index].quantity = currentQty - 1;
            setCart(cart);
            saveCartToStorage(cart);
            updateCartUI();
        }
    });
}
