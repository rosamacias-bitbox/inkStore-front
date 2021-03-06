import { types } from "../types/types";

const initialState = {
    logged : false,
    name : null,
    token  : null   
};

export const authReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        case types.login:
            return {
                ...state,
                logged : true,    
                token: action.payload.token,        
                name : action.payload.name,                  
            }
        case types.logout:
            return {
                logged : false
            }
        default:
            return state;  
    }
}