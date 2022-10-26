import React, { useContext } from 'react';
import { Image, Text, TouchableOpacity, ScrollView, View } from 'react-native';
import { useNavigate } from 'react-router';
import { CharactersContext } from '../../../../context/useCharactersContext';
import { Loading } from '../../../components/loading';
import { Search } from '../search';
import { NoResults } from '../noResult';
import { styles } from './styles';

export const CharactersList = () => {
    const { link, img, text, header, headerText, headerWrapper, listWrapper } = styles;
    const navigate = useNavigate();
    const { data: characters, searchQuery, ...rest } = useContext(CharactersContext);
    const goToItem = (id) => navigate(`${id.toString()}`);

    return (
        <View style={headerWrapper}>
            <View style={header}>
                <View>
                    <Text style={headerText}>
                        Characters
                    </Text>
                </View>
                <Search />
            </View>
            {!characters || !Object.keys(characters).length ?
                <Loading /> :
                characters.total === 0 ?
                    <NoResults text={searchQuery} /> :
                    <ScrollView style={listWrapper}>
                        {characters && characters.results.map(character => (
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
            }
        </View>
    )
}