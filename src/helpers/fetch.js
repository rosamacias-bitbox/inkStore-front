//TODO: for some reason it is NOT picking the env var. Will do later
//const baseURL = process.env.REACT_APP_WAREHOUSE_API_URL; 
//for now define it locally 

const baseURL = 'http://localhost:8080';

export const fetchWithoutToken = ( endpoint, data, method = 'GET') => {
    
    const url = `${baseURL}/${endpoint}`;

    if (method === 'GET') {
        return fetch(url);
    } else {
        return fetch( url, {
            method,
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify( data )
        });
    }
} 

export const fetchWithToken = ( endpoint, data, method = 'GET') => {

    const url = `${baseURL}/${endpoint}`;
    const token = localStorage.getItem('token') || '';

    if (method === 'GET') {
        return fetch(url, {
            method,
            headers: {
                'Authorization' : 'Bearer ' + token
            }
        });
    } else {
        return fetch( url, {
            method,
            headers: {
                'Content-type' : 'application/json',
                'Authorization' : 'Bearer ' + token
            },
            body: JSON.stringify( data )
        });
    }
}