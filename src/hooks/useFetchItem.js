import { useState, useEffect } from 'react'
import { getFetchItems } from '../helpers/getFetchItems';


export const useFetchItem = () => {

    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    useEffect(() => {
        getFetchItems()
            .then(items => setState(
                {
                    data : items,
                    loading: false
                }
            ))
    }, [])

    return state;
};