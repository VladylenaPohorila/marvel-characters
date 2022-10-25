import React, { useState, useContext } from 'react';
import { View, TextInput, Text, TouchableHighlight } from 'react-native';
import { CharactersContext } from '../../../../context/useCharactersContext';
import { styles } from './styles';

export const Search = () => {
    const { searchWrapper, searchInput, searchText } = styles;
    const { searchQuery, setSearchQuery } = useContext(CharactersContext);
    const [name, setName] = useState(searchQuery);
    const onSubmit = () => {
        setSearchQuery(name);
        setName('');
    };

    return (
        <View style={searchWrapper}>
            <TextInput
                style={searchInput}
                placeholder='Name'
                value={name}
                type='text'
                onChangeText={text => setName(text.trim())} />
            <TouchableHighlight onPress={() => onSubmit()}>
                <Text style={searchText}>Search</Text>
            </TouchableHighlight>
        </View>
    )
}