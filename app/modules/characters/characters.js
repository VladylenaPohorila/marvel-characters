import React from 'react';
import { Outlet } from 'react-router';
import { ScrollView } from 'react-native';
import { CharactersContextProvider } from '../../context/useCharactersContext';

export const Characters = () => {
    return (
        <CharactersContextProvider>
            <ScrollView>
                <Outlet />
            </ScrollView>
        </CharactersContextProvider>
    )
}