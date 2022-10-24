import React, { useContext } from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { useNavigate } from 'react-router';
import { CharactersContext } from '../../../context/useCharactersContext';
import { Loading } from '../../components';
import { styles } from '../styles';

export const CharactersList = () => {
    const { link, img, text } = styles;
    const navigate = useNavigate();
    const characters = useContext(CharactersContext);
    const goToItem = (id) => navigate(`${id.toString()}`);

    return (
        !characters || !Object.keys(characters).length ?
            <Loading /> :
            characters && characters?.results.map(character => (
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
            ))
    )
}