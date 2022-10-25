import React, { createContext, useState, useEffect } from 'react';
import { BaseUrl, SearchUrl } from '../utilits/getData';
import { useDebounce } from '../hooks/useDebounce';

export const CharactersContext = createContext(null);

export const CharactersContextProvider = ({ children }) => {
    const [data, setData] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const searchWait = useDebounce(searchQuery, 300);

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(searchWait ? SearchUrl(searchWait) : BaseUrl);
                const data = await res.json();
                setData(data.data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [BaseUrl, searchWait]);

    return (
        <CharactersContext.Provider value={{ data, searchQuery, setSearchQuery }}>
            {children}
        </CharactersContext.Provider>
    );
}