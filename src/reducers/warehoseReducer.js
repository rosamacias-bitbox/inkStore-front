import { types } from "../types/types";

const initialState = {
    events: [

    ],
    activeEvent : null
};

export const warehouseReducer = ( state = initialState, action ) =>{
    switch (action.type) {
        case types.eventSetItemActive:
            return {
                ...state,
                activeEvent : action.payload                
            }
        case types.eventAddNewItem:
            return {
                ...state,
                events: [
                    ...state.events,
                    action.payload
                ]
            }
        case types.eventClearActiveEvent:
            return {
                ...state,
                activeEvent : null
            }    
        default:
            return state;
    }
}
