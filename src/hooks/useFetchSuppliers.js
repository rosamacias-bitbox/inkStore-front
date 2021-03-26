import { useState, useEffect } from 'react'
import { suppliersFindAll } from '../actions/suppliers';

export const useFetchSuppliers = (dispatch) => {

    const [state, setState] = useState({
        data: [],
        suppliersLoading: true,
    });

    useEffect(() => {
        dispatch( suppliersFindAll());
    }, [dispatch])

    return state;
};