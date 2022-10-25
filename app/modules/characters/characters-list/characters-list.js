import React, { useContext } from 'react';
import { Image, Text, TouchableOpacity, ScrollView, View } from 'react-native';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-native';
import { CharactersContext } from '../../../context/useCharactersContext';
import { Loading } from '../../components';
import { Search } from '../components/search/search';
import { NoResults } from '../components/noResult/noResults';
import { styles } from './styles';

export const CharactersList = () => {
    const { link, img, text, header, headerText } = styles;
    const navigate = useNavigate();
    const characters = useContext(CharactersContext);
    const [searchParams, setSearchParams] = useSearchParams();
    const goToItem = (id) => navigate(`${id.toString()}`);
    const nameStartsWithQuery = searchParams.get('nameStartsWith');
    //console.log(characters)

    return (
        <View style={{ padding: 10 }}>
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
                    <NoResults text={nameStartsWithQuery} /> :
                    <ScrollView style={{ marginBottom: 90 }}>
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