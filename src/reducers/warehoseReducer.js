import { types } from "../types/types";

const initialState = {
    event: [

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
        default:
            return state;
    }
}
