import React, { useState } from 'react';
import { useSearchParams } from 'react-router-native';
import { View, TextInput, Text, TouchableHighlight } from 'react-native';
import { styles } from './styles';

export const Search = () => {
    const { searchWrapper, searchInput, searchText } = styles;
    const [name, setName] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const onSubmit = () => {
        setSearchParams({ nameStartsWith: name });
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