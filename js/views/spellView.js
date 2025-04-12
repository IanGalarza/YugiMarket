import { getSpellCards } from "../services/spellCardService.js";
import { getCart } from "../components/cart.js";

let currentPage = 1;
const pageSize = 12;

export function loadSpellCards(offset = 0) {
    const $spinner = $("#SpellCards .loading-spinner");
    const $grid = $("#SpellCards .cards-grid");

    $grid.empty().addClass("hidden");
    $spinner.removeClass("hidden");

    getSpellCards({ num: pageSize, offset })
        .then(response => {
            const cards = response.data;

            const cart = getCart();
            const cartIds = cart.map(item => item.name);

            cards.forEach(card => {
                const isInCart = cartIds.includes(card.name);

                const cardElement = $(`
                    <article class="card ${isInCart ? 'selected-card' : ''}" data-id="${card.name}">
                        <img class="card-Img" src="${card.card_images[0].image_url}" alt="${card.name}">
                        <p>${card.name}</p>
                    </article>
                `);

                $grid.append(cardElement);
            });

            updatePaginationButtons(currentPage, cards.length, pageSize, $("#SpellCards"));
        })
        .catch(error => {
            console.error("Error al cargar las cartas de hechizo:", error);
        })
        .always(() => {
            $spinner.addClass("hidden");
            $grid.removeClass("hidden"); 
        });
}

function updatePaginationButtons(currentPage, cardsLength, pageSize, $section) {
    const $prev = $section.find(".prev-page");
    const $next = $section.find(".next-page");

    if (currentPage <= 1) {
        $prev.addClass("disabled");
    } else {
        $prev.removeClass("disabled");
    }

    if (cardsLength < pageSize) {
        $next.addClass("disabled");
    } else {
        $next.removeClass("disabled");
    }

    $section.find(".current-page").text(currentPage);
}

export function setupSpellPagination() {
    const $section = $("#SpellCards");

    $section.on("click", ".next-page", () => {
        if ($section.find(".next-page").hasClass("disabled")) return;

        currentPage++;
        const offset = (currentPage - 1) * pageSize;
        loadSpellCards(offset);
    });

    $section.on("click", ".prev-page", () => {
        if (currentPage > 1 && !$section.find(".prev-page").hasClass("disabled")) {
            currentPage--;
            const offset = (currentPage - 1) * pageSize;
            loadSpellCards(offset);
        }
    });
}
