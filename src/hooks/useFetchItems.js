import { useState, useEffect } from 'react'
import { itemsFindAll } from '../actions/items';


export const useFetchItems = (dispatch) => {

    const [state, setState] = useState({
        data: [],
        itemsLoading: true,
    });

    useEffect(() => {
        dispatch( itemsFindAll());
    }, [])

    return state;
};