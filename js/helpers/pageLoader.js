import { loadSpellCards, setupSpellPagination } from '../views/spellView.js';
import { loadTrapCards, setupTrapPagination } from '../views/trapView.js';
import { loadRitualCards, setupRitualPagination } from '../views/ritualView.js';
import { loadNormalCards, setupNormalPagination } from '../views/normalView.js';

const routes = {
    'spellCard.html': () => {
        loadSpellCards();
        setupSpellPagination();
    },
    'trapCard.html': () => {
        loadTrapCards();
        setupTrapPagination();
    },
    'ritualCard.html': () => {
        loadRitualCards();
        setupRitualPagination();
    },
    'normalMonster.html': () => {
        loadNormalCards();
        setupNormalPagination();
    }
};

//Funcion para cargar el contenido segun la pagina

export function loadPageContent() {
    const path = window.location.pathname;

    for (const route in routes) {
        if (path.includes(route) || path.endsWith('/YugiMarket/') && route === '/') {
            routes[route]();
            break;
        }
    }
}
