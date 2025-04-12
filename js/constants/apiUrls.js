const BASE_API_URL = 'https://db.ygoprodeck.com/api/v7';

export const API_URLS = {
    GET_SPELL_CARDS: ({ num, offset }) =>
        `${BASE_API_URL}/cardinfo.php?type=Spell%20Card&num=${num}&offset=${offset}`,

    GET_TRAP_CARDS: ({ num, offset }) =>
        `${BASE_API_URL}/cardinfo.php?type=Trap%20Card&num=${num}&offset=${offset}`,

    GET_MONSTER_CARDS: ({ num, offset }) =>
        `${BASE_API_URL}/cardinfo.php?type=Normal%20Monster&num=${num}&offset=${offset}`,

    GET_RITUAL_CARDS: ({ num, offset }) =>
        `${BASE_API_URL}/cardinfo.php?type=Ritual%20Monster&num=${num}&offset=${offset}`,
};
