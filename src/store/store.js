import {createStore, combineReducers} from 'redux';
import { authReducer } from '../auth/authReducer';

const reducers = combineReducers({
    auth : authReducer
})

export const store = createStore();