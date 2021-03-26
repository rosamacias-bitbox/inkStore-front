import { types } from "../types/types";
import { fetchWithToken } from '../helpers/fetch';

export const suppliersFindAll = () => {
    return async (dispatch) => {

        const response = await fetchWithToken('api/suppliers/findAll', {});
        const body     = await response.json();
        dispatch(getSuppliers(body))
    }
}

const getSuppliers = (suppliers) => ({
    type: types.suppliersFindAll,
    payload: suppliers
});