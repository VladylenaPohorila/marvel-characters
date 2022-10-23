import React from 'react';
import { View, Image, Text } from 'react-native';
import { marginNew } from '../../../utilits/padding-marging';

export const Character = ({ character }) => {
    const {
        id,
        name,
        description,
        modified,
        thumbnail,
        comics,
        stories,
        events,
        series } = character;
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Image source={{ uri: `${thumbnail.path}.${thumbnail.extension}` }} />
            <Text style={{ ...marginNew(8, 0), color: 'white', fontSize: 24 }}>{name}</Text>
            <Text style={{ color: 'white', fontSize: 20, marginBottom: 8 }}>{description}</Text>
            <View style={{ marginBottom: 8 }}>
                <Text>Comics</Text>
                {comics && comics.items.map((item, index) => (
                    <View key={index}>
                        <Text>{item.name}</Text>
                    </View>
                ))}
            </View>
            <View style={{ width: '100%' }}>
                <Text>{modified}</Text>
            </View>
        </View>
    )
}