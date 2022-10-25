import React from 'react';
import { Outlet, useLocation } from 'react-router';
import { useSearchParams } from 'react-router-native';
import { View } from 'react-native';
import { CharactersContextProvider } from '../../context/useCharactersContext';

export const Characters = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const nameStartsWithQuery = searchParams.get('nameStartsWith');
    console.log(useLocation())

    return (
        <CharactersContextProvider search={nameStartsWithQuery}>
            <View>
                <Outlet />
            </View>
        </CharactersContextProvider>
    )
}