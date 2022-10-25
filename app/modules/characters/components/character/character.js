import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { View, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Loading } from '../../../components';
import { ItemList } from '../item-list';
import { UrlCharacter } from '../../../../utilits/getData';
import { styles } from './styles';

export const Character = () => {
    const { container,
        itemName,
        itemImg,
        itemDescription,
        colorText,
        containerModified,
        wrapperImg,
        header } = styles;
    const { id: characterId } = useParams();
    const [character, setCharacter] = useState([]);
    const navigate = useNavigate();
    const goBack = () => navigate('../.');

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(UrlCharacter(characterId));
                const data = await res.json();
                setCharacter(data.data.results[0]);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [characterId])

    return (
        <View style={{ padding: 10 }}>
            <View style={header}>
                <TouchableOpacity
                    onPress={() => goBack()}>
                    <Text style={colorText}>Back</Text>
                </TouchableOpacity>
            </View>
            {!character || !Object.keys(character).length ?
                <Loading /> :
                <ScrollView
                    style={container}>
                    <Text style={itemName}>
                        {character.name}
                    </Text>
                    <View style={wrapperImg}>
                        <Image
                            source={{ uri: `${character.thumbnail.path}.${character.thumbnail.extension}` }}
                            style={itemImg} />
                    </View>
                    {character.description &&
                        <Text style={itemDescription}>
                            {character.description}
                        </Text>}
                    {character.comics.available !== 0 &&
                        <ItemList list={character.comics.items} title='Comics' />
                    }
                    {character.stories.available !== 0 &&
                        <ItemList list={character.stories.items} title='Stories' />
                    }
                    {character.events.available !== 0 &&
                        <ItemList list={character.events.items} title='Events' />
                    }
                    {character.series.available !== 0 &&
                        <ItemList list={character.series.items} title='Series' />
                    }
                    <View style={containerModified}>
                        <Text style={colorText}>
                            {`Modified: ${character.modified.slice(0, 10)}`}
                        </Text>
                    </View>
                </ScrollView>
            }
        </View>
    )
}