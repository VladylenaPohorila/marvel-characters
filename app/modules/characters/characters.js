import React from 'react';
import { Outlet } from 'react-router';
import { View } from 'react-native';
import { CharactersContextProvider } from '../../context/useCharactersContext';

export const Characters = () => {
    return (
        <CharactersContextProvider>
            <View>
                <Outlet />
            </View>
        </CharactersContextProvider>
    )
}