import React, { useContext } from 'react';
import { View, TextInput } from 'react-native';
import { CharactersContext } from '../../../../context/useCharactersContext';
import { styles } from './styles';

export const Search = () => {
    const { searchWrapper, searchInput, searchText } = styles;
    const { searchQuery, setSearchQuery } = useContext(CharactersContext);

    return (
        <View style={searchWrapper}>
            <TextInput
                style={searchInput}
                placeholder='Name'
                value={searchQuery}
                type='text'
                onChangeText={text => setSearchQuery(text)} />
        </View>
    )
}