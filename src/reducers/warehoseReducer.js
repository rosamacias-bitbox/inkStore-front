import { types } from "../types/types";

const initialState = {
    items: [

    ],
    activeItem : null
};

export const warehouseReducer = ( state = initialState, action ) =>{
    switch (action.type) {
        case types.itemSetActive:
            return {
                ...state,
                activeItem : action.payload                
            }
        case types.itemAddNew:
            return {
                ...state,
                items: [
                    ...state.items,
                    action.payload
                ]
            }
        case types.itemClearActive:
            return {
                ...state,
                activeItem : null
            }    
        case types.itemUpdated:
            return {
                ...state,
                items: state.items.map(
                    e => ( e.id === action.payload.id) ? action.payload : e
                )
            }
        case types.itemsSet:
            return {
                ...state,
                items: action.payload                
            }    
        default:
            return state;
    }
}
