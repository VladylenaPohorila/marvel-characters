import React, { useEffect, useState } from 'react';
import { Image, View, Text, ScrollView } from 'react-native';
import { BaseUrl } from '../../utilits/getData';
import { Loading } from '../components';

export const Characters = () => {
    const [characters, setCharacters] = useState({});
    useEffect(() => {
        const getDate = async () => {
            const res = await fetch(BaseUrl);
            const data = await res.json();
            setCharacters(data.data);
        }
        getDate();
    }, [BaseUrl]);

    return (
        !characters || !Object.keys(characters).length ?
            <Loading /> :
            <ScrollView>
                {characters && characters.results.map(character => (
                    <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row', marginTop: 6, marginBottom: 6 }} key={character.id}>
                        <Image source={{
                            uri: `${character.thumbnail.path}.${character.thumbnail.extension}`
                        }}
                            style={{ width: 50, height: 50 }} />
                        <Text style={{ marginLeft: 6, fontSize: 18, color: 'white' }}>{character.name}</Text>
                    </View>
                ))}
            </ScrollView>
    )
}