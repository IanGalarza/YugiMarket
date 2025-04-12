import { API_URLS } from "../constants/apiUrls.js";

export function getSpellCards({num = 12, offset = 0}){
    return $.ajax({
        url: API_URLS.GET_SPELL_CARDS({num, offset}),
        method: 'GET',
        dataType: 'json',
    });
}
