import React, { useContext } from 'react';
import { Image, Text, TouchableOpacity, ScrollView, View } from 'react-native';
import { useNavigate } from 'react-router';
import { CharactersContext } from '../../../context/useCharactersContext';
import { Loading } from '../../components';
import { styles } from './styles';

export const CharactersList = () => {
    const { link, img, text, header, headerText } = styles;
    const navigate = useNavigate();
    const characters = useContext(CharactersContext);
    const goToItem = (id) => navigate(`${id.toString()}`);

    return (
        !characters || !Object.keys(characters).length ?
            <Loading /> :
            <View style={{ padding: 10 }}>
                <View style={header}>
                    <View>
                        <Text style={headerText}>
                            Characters
                        </Text>
                    </View>
                    <TouchableOpacity>
                        <Text style={headerText}>Search</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={{ marginBottom: 90 }}>
                    {characters && characters?.results.map(character => (
                        <TouchableOpacity
                            style={link}
                            key={character.id}
                            id={character.id}
                            onPress={() => goToItem(character.id)}>
                            <Image source={{
                                uri: `${character.thumbnail.path}.${character.thumbnail.extension}`
                            }}
                                style={img} />
                            <Text style={text}>{character.name}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
    )
}