export function loadCartFromStorage() {
    const data = localStorage.getItem('cart');
    return data ? JSON.parse(data) : [];
}

export function saveCartToStorage(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}
