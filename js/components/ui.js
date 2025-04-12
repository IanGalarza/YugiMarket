import { getCart, getTotal } from '../components/cart.js';

export function updateCartUI() {
    const cart = getCart();
    const $list = $(".cart-items-list");
    $list.empty();

    if (cart.length === 0) {
        $list.append(`<li class="empty-cart-msg">El carrito se encuentra vacío</li>`);
    } else {
        cart.forEach((item, index) => {
            const disableMinus = item.quantity === 1 ? 'disabled' : '';
        
            $list.append(`
                <li>
                    <img src="${item.imgSrc}" alt="${item.name}">
                    <div class="item-info">
                        <strong>${item.name}</strong><br>
                        <span>$${item.price} x ${item.quantity}</span>
        
                        <div class="quantity-controls">
                            <button class="qty-minus" data-index="${index}" ${disableMinus}>−</button>
                            <span class="qty">${item.quantity}</span>
                            <button class="qty-plus" data-index="${index}">+</button>
                        </div>
                    </div>
                    <span class="remove-item" data-index="${index}">🗑️</span>
                </li>
            `);
        });        
    }

    $(".cart-footer").html(`
        <button class="clear-cart-button">Vaciar</button>
        <strong>Total: $${getTotal()}</strong>
    `);

    updateSelectedCardsUI();
}

export function updateSelectedCardsUI() {
    $(".card").removeClass("selected-card");
    const cart = getCart();

    cart.forEach(item => {
        $(".card").each(function () {
            if ($(this).find("p").text() === item.name) {
                $(this).addClass("selected-card");
            }
        });
    });
}
