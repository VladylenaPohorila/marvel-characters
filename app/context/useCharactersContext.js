import React, { createContext, useState, useEffect } from 'react';
import { BaseUrl, SearchUrl } from '../utilits/getData';

export const CharactersContext = createContext(null);

export const CharactersContextProvider = ({ children }) => {
    const [data, setData] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(searchQuery ? SearchUrl(searchQuery) : BaseUrl);
                const data = await res.json();
                setData(data.data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [BaseUrl, searchQuery]);

    return (
        <CharactersContext.Provider value={{ data, searchQuery, setSearchQuery }}>
            {children}
        </CharactersContext.Provider>
    );

}