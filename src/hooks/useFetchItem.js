import { useState, useEffect } from 'react'
import { getFetchItems } from '../helpers/getFetchItems';


export const useFetchItem = () => {

    const [state, setState] = useState({
        data: [],
        itemsLoading: true,
    });

    useEffect(() => {
        getFetchItems()
            .then(items => setState(
                {
                    data : items,
                    itemsLoading: false
                }
            ))
    }, [])

    return state;
};