import React, { useState, useEffect, useContext, useCallback } from 'react';
import { nanoid } from 'nanoid';

import { FAVS_STORAGE_KEY } from '@/shared/utils/constants';

import { useAuth } from './AuthProvider';

import useLocalStorage from '@/shared/hooks/useLocalStorage';

const FavsContext = React.createContext(null);

const useFavs = () => {
    const context = useContext(FavsContext);
    if (!context) {
        throw new Error(`Can't use "useFavs" without an FavsProvider!`);
    }
    return context;
};

// eslint-disable-next-line react/prop-types
const FavsProvider = ({ children }) => {
    const { user } = useAuth();

    const [list, setList] = useLocalStorage(FAVS_STORAGE_KEY, []);

    const save = (video) => {
        const saveItem = {
            video,
            uid: nanoid(),
        };
        const newList = [saveItem, ...list];
        console.log('saved');
        setList(newList);
    };

    const remove = (videoId) => {
        const newList = list.filter((i) => i.video.id !== videoId);

        console.log('removed');
        setList(newList);
    };

    const inList = (videoId) => {
        return list.some((i) => i.video.id === videoId);
    };

    return (
        <FavsContext.Provider value={{ list, save, remove, inList }}>
            {children}
        </FavsContext.Provider>
    );
};

export { useFavs };
export default FavsProvider;
