import { types } from "../types/types";

export const eventAddNewItem = (event) => ({
    type : types.eventAddNewItem,
    payload : event
});

export const eventSetItemActive = (event) => ({
    type: types.eventSetItemActive,
    payload : event
})