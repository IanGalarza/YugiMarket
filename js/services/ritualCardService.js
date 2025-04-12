import { API_URLS } from "../constants/apiUrls.js";

export function getRitualCards({num = 12, offset = 0}){
    return $.ajax({
        url: API_URLS.GET_RITUAL_CARDS({num, offset}),
        method: 'GET',
        dataType: 'json',
    });
}

