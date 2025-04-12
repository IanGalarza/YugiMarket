import { setCart } from './components/cart.js';
import { loadCartFromStorage } from './components/storage.js';
import { updateCartUI } from './components/ui.js';
import { registerEvents } from './components/cartEvents.js';
import { loadPageContent } from './helpers/pageLoader.js';


$(document).ready(() => {
    const storedCart = loadCartFromStorage();
    setCart(storedCart);
    updateCartUI();
    registerEvents();
    loadPageContent();

    $('#hamburger-btn').on('click', () => {
        $('.main-nav').toggleClass('active');
    });
});
