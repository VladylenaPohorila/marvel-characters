import React, { createContext, useState, useEffect } from 'react';
import { BaseUrl, SearchUrl } from '../utilits/getData';

export const CharactersContext = createContext(null);

export const CharactersContextProvider = ({ children, search }) => {
    const [data, setData] = useState(null);
    //console.log(search)

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(search ? SearchUrl(search) : BaseUrl);
                const data = await res.json();
                setData(data.data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [BaseUrl, search]);

    return (
        <CharactersContext.Provider value={data}>
            {children}
        </CharactersContext.Provider>
    );

}