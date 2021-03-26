import { fetchWithoutToken } from '../helpers/fetch';
import { types } from '../types/types';

export const loginWithEmailPassword = (username, password) => {
    return async ( dispatch  ) => {
       
        const resp = await fetchWithoutToken( 'signin', {username, password}, 'POST' );
        const body = await resp.json();

        if ( body.jwt ) {
            localStorage.setItem('token', body.jwt);
            localStorage.setItem('token-init-date', new Date().getTime());
        
            dispatch( login( {
                token: body.jwt,
                name:  username
            }))
        }
    }
}

const login = ( user ) => ({
    type : types.login,
    payload: user
});

export const logout = () =>({ type : types.logout });
 