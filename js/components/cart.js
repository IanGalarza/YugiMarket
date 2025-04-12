export let cart = [];

export function addToCart(item) {
    const existingItem = cart.find(i => i.name === item.name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }
}

export function decreaseQuantityByName(name) {
    const item = cart.find(i => i.name === name);
    if (item && item.quantity > 1) {
        item.quantity -= 1;
    }
}

export function removeFromCartByName(name) {
    cart = cart.filter(item => item.name !== name);
}

export function clearCart() {
    cart = [];
}

export function isInCart(name) {
    return cart.some(item => item.name === name);
}

export function getCart() {
    return cart;
}

export function getTotal() {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}
export function setCart(newCart) {
    cart = newCart;
}
