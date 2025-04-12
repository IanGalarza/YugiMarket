import { getRitualCards } from "../services/ritualCardService.js";
import { getCart } from "../components/cart.js";

let currentPage = 1;
const pageSize = 12;

export function loadRitualCards(offset = 0) {
    const $spinner = $("#RitualCards .loading-spinner");
    const $grid = $("#RitualCards .cards-grid");

    $grid.empty().addClass("hidden");
    $spinner.removeClass("hidden");

    getRitualCards({ num: pageSize, offset })
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

            updatePaginationButtons(currentPage, cards.length, pageSize, $("#RitualCards"));
        })
        .catch(error => {
            console.error("Error al cargar las cartas de ritual:", error);
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

export function setupRitualPagination() {
    const $section = $("#RitualCards");

    $section.on("click", ".next-page", () => {
        if ($section.find(".next-page").hasClass("disabled")) return;

        currentPage++;
        const offset = (currentPage - 1) * pageSize;
        loadRitualCards(offset);
    });

    $section.on("click", ".prev-page", () => {
        if (currentPage > 1 && !$section.find(".prev-page").hasClass("disabled")) {
            currentPage--;
            const offset = (currentPage - 1) * pageSize;
            loadRitualCards(offset);
        }
    });
}
