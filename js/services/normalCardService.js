import { API_URLS } from "../constants/apiUrls.js";

export function getNormalCards({num = 12, offset = 0}){
    return $.ajax({
        url: API_URLS.GET_MONSTER_CARDS({num, offset}),
        method: 'GET',
        dataType: 'json',
    });
}

