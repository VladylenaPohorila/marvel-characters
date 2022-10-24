import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { View, Image, Text } from 'react-native';
import { CharactersContext } from '../../../context/useCharactersContext';
import { Loading } from '../../components';
import { ItemList } from './item-list';
import { styles } from './styles';

export const Character = () => {
    const { container, itemName, itemImg, itemDescription, colorText, containerModified } = styles;
    const { characterId } = useParams();
    const characters = useContext(CharactersContext);
    const character = characters && characters.results.filter(item => item.id === +characterId);

    return (
        (!character || !character.length ?
            <Loading /> :
            <View
                style={container}>
                <Text style={itemName}>
                    {character[0].name}
                </Text>
                <Image
                    source={{ uri: `${character[0].thumbnail.path}.${character[0].thumbnail.extension}` }}
                    style={itemImg} />
                {character[0].description &&
                    <Text style={itemDescription}>
                        {character[0].description}
                    </Text>}
                {character[0].comics.available !== 0 &&
                    <ItemList list={character[0].comics.items} title='Comics' />
                }
                {character[0].stories.available !== 0 &&
                    <ItemList list={character[0].stories.items} title='Stories' />
                }
                {character[0].events.available !== 0 &&
                    <ItemList list={character[0].events.items} title='Events' />
                }
                {character[0].series.available !== 0 &&
                    <ItemList list={character[0].series.items} title='Series' />
                }
                <View style={containerModified}>
                    <Text style={colorText}>
                        {`Modified: ${character[0].modified.slice(0, 10)}`}
                    </Text>
                </View>
            </View>
        )
    )
}