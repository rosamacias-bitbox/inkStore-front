import { types } from "../types/types";
import { fetchWithoutToken, fetchWithToken } from '../helpers/fetch';

export const itemStartAddNew = (item) => {
    return async ( dispatch ) => {
        console.log(item);
        const resp = await fetchWithoutToken('api/items/save', item, 'POST');
        const body = await resp.json();
        
        console.log('USER:',  item.user);
        
        if (resp.ok)
        {
            dispatch( itemAddNew(item));
        }
    }
}

const itemAddNew = (item) => ({
    type: types.itemAddNew,
    payload: item
});

export const itemSetActive = (item) => ({
    type: types.itemSetActive,
    payload: item
})

export const itemClearActive = () => ({ type: types.itemClearActive });

export const itemStartUpdate = (item) => {
    return async ( dispatch ) => {
        const resp = await fetchWithoutToken('api/items/update', item, 'POST');
        const body = await resp.json();
        console.log(body);

        if (resp.ok)
        {
            dispatch( itemUpdated(item));
        }
    }
}

 const itemUpdated = (item) => ({
    type: types.itemUpdated,
    payload: item
});



export const itemDeleted = (item) => ({ type: types.itemDeleted });

export const itemsFindAll = () => {
    return async (dispatch) => {

        const response = await fetchWithToken('api/items/findAll', {});
        const body     = await response.json();
        dispatch(getItems(body))
    }
}

const getItems = (items) => ({
    type: types.itemsFindAll,
    payload: items
});
