import React, { useState } from 'react';
import { useSearchParams } from 'react-router-native';
import { View, TextInput, Text, TouchableHighlight } from 'react-native';
import { paddingNew } from '../../../../utilits/padding-marging';

export const Search = () => {
    const [name, setName] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const onSubmit = () => {
        setSearchParams({ nameStartsWith: name });
        setName('');
    };

    return (
        <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginLeft: 16
        }}>
            <TextInput
                style={{
                    flex: 2,
                    ...paddingNew(0, 4),
                    borderWidth: 1,
                    borderColor: 'rgb(153, 0, 0)'
                }}
                placeholder='Name'
                value={name}
                type='text'
                onChangeText={text => setName(text)} />
            <TouchableHighlight onPress={() => onSubmit()}>
                <Text>Search</Text>
            </TouchableHighlight>
        </View>
    )
}