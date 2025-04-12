import { API_URLS } from "../constants/apiUrls.js";

export function getTrapCards({num = 12, offset = 0}){
    return $.ajax({
        url: API_URLS.GET_TRAP_CARDS({num, offset}),
        method: 'GET',
        dataType: 'json',
    });
}

