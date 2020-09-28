import React, { useContext } from 'react';
import { nanoid } from 'nanoid';

import { FAVS_STORAGE_KEY } from '@/shared/utils/constants';

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
    const [list, setList] = useLocalStorage(FAVS_STORAGE_KEY, []);

    const save = (video) => {
        const saveItem = {
            video,
            uid: nanoid(),
        };
        const newList = [saveItem, ...list];
        setList(newList);
    };

    const remove = (videoId) => {
        const newList = list.filter((i) => i.video.id !== videoId);
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
