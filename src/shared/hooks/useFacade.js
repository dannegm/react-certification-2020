import { useState, useEffect } from 'react';

import useFetch from './useFetch';
import useLocalStorage from './useLocalStorage';

const useFacade = (url) => {
    const { data, loading, ...restFetch } = useFetch(url);
    const [cacheData, setCacheData] = useLocalStorage(url);
    const [facadeData, setFacadeData] = useState(data);

    useEffect(() => {
        if (data && data.error) {
            setFacadeData(cacheData);
        }

        if (data) {
            setCacheData(data);
            setFacadeData(data);
        }
    }, [data, loading]);

    return {
        ...restFetch,
        loading,
        data: facadeData,
    };
};

export default useFacade;
