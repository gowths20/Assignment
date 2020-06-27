
import config from '../config/config';

async function invoke_api(url, requestOptions) {
    var apiRequest1 = fetch(url, requestOptions)
        .then(response => {
            return response.json();
        }).catch(err => {
            console.log("eooor========", err)
            return { error: err.message, success: false };
        });


    return Promise.all([apiRequest1]).then(function (response) {
        var resp = response[0];
        return resp;
    });
}
async function get_lists(search) {  
   
    search = search !== "" ? search.split('#').filter(Boolean).map(val => val.trim()).join(',').toLowerCase() : "empty";
     let response = await invoke_api(config.apiUrl+"?data="+search);
    return response;
}
async function update(search,id,like) {  
   
    search = search !== "" ? search.split('#').filter(Boolean).map(val => val.trim()).join(',').toLowerCase() : "empty";
    let response = await invoke_api(config.apiUrlPost+"?id="+id+"&likes="+like+"&data="+search);
    return response;
}
/**
 * This method is used for saving the objects in session
 */

export const apiService = {
    get_lists,
    update
};