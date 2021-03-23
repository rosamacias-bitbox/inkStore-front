import { combineReducers } from 'redux';
import { uiReducer } from './uiReducer';
import { authReducer} from './authReducer';
import { warehouseReducer } from './warehoseReducer';

export const rootReducer = combineReducers({
    ui : uiReducer,
    auth : authReducer,
    warehouse : warehouseReducer

})