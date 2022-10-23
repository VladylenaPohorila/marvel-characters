import React from 'react';
import { Routes, Route } from 'react-router-native';
import { Loader } from '../modules/loader/loader';
import { Home } from '../modules/home/homePage';
import { Characters } from '../modules/characters/characters';
import { Character } from '../modules/characters/components';

export const RoutersApp = () => {
    return (
        <Routes>
            <Route path='/' element={<Loader />}>
                <Route index element={<Home />} />
                <Route path='characters' element={<Characters />} />
                <Route path='character/:id' element={<Character />} />
            </Route>
        </Routes>
    )
}
