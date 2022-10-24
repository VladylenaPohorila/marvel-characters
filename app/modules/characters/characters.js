import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { CharactersContext } from '../../context/useCharactersContext';
import { Loading } from '../components';

export const Characters = () => {
    const { link, img, text } = styles;
    const navigate = useNavigate();
    const characters = useContext(CharactersContext);
    const goToItem = (id) => navigate(`/character/${id.toString()}`);

    return (
        !characters || !Object.keys(characters).length ?
            <Loading /> :
            <View>
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
            </View>
    )
}