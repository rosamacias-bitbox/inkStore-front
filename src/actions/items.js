import { types } from "../types/types";
import { fetchWithToken } from '../helpers/fetch';


export const itemAddNew = (item) => ({
    type: types.itemAddNew,
    payload: item
});

export const itemSetActive = (item) => ({
    type: types.itemSetActive,
    payload: item
})

export const itemClearActive = () => ({ type: types.itemClearActive });

export const itemUpdated = (item) => ({
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
