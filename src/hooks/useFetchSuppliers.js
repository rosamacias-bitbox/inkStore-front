import { useState, useEffect } from 'react'
import { getFetchSuppliers } from '../helpers/getFetchSuppliers';

export const useFetchSuppliers = () => {

    const [state, setState] = useState({
        data: [],
        suppliersLoading: true,
    });

    useEffect(() => {
        getFetchSuppliers()
            .then(suppliers => setState(
                {
                    data : suppliers,
                    suppliersLoading: false
                }
            ))
    }, [])

    return state;
};