import { fetchWithoutToken } from '../helpers/fetch';
import { types } from '../types/types';

export const loginWithEmailPassword = (email, password) => {
    return async ( dispatch  ) => {
       
        const resp = await fetchWithoutToken( 'auth', {email, password}, 'POST' );
        const body = await resp.json();
        console.log( body );

        if ( body.ok ) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());
        
            dispatch( login( {
                uid: body.uid,
                name: body.name
            }))
        }
    }
}

const login = ( user ) => ({
    type : types.login,
    payload: user
})

