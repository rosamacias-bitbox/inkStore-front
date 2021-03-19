import { types } from '../types/types';

export const loginWithEmailPassword = (email, password) =>{
    return ( dispatch ) => {

        setTimeout(() => {
            dispatch( login( email, password));
        }, 3000);
    }
}

export const login = (uid, displayName) => ({    
        type : types.login,
        payload : {
            uid,
            displayName
        }
    })
