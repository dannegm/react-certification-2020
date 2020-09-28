import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [errors, setErrors] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const jsonData = await response.json();
            setData(jsonData);
        } catch (err) {
            setErrors(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
        return () => {
            setLoading(false);
            setData(null);
            setErrors(null);
        };
    }, [url]);

    return {
        loading,
        data,
        errors,
        fetchData,
    };
};

export default useFetch;
