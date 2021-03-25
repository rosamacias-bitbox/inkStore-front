import { types } from "../types/types";

export const itemAddNew = (item) => ({
    type : types.itemAddNew,
    payload : item
});

export const itemSetActive = (item) => ({
    type: types.itemSetActive,
    payload : item
})

export const itemClearActive = () => ({ type : types.itemClearActive});

export const itemUpdated = (item) => ({
    type: types.itemUpdated,
    payload: item
});

export const itemsSet = (items) => ({
    type: types.itemsSet,
    payload: items
})