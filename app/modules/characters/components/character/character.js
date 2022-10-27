import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { View, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import { UrlCharacter } from '../../../../utilits/getData';
import { Loading } from '../../../components';
import { WrapperItemList } from './wrapper-item-list';
import { ItemList } from '../item-list';
import { styles } from './styles';

export const Character = () => {
  const { container,
    itemWrapper,
    itemName,
    itemImg,
    itemDescription,
    colorText,
    containerModified,
    wrapperImg,
    header,
    backImg } = styles;
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
    <View style={itemWrapper}>
      <View style={header}>
        <TouchableOpacity
          onPress={() => goBack()}>
          <Image source={require('../../../../../assets/back-white.png')}
            style={backImg} />
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
          <WrapperItemList data={character.comics.available}>
            <ItemList list={character.comics.items} title='Comics' />
          </WrapperItemList>

          <WrapperItemList data={character.stories.available}>
            <ItemList list={character.stories.items} title='Stories' />
          </WrapperItemList>

          <WrapperItemList data={character.events.available}>
            <ItemList list={character.events.items} title='Events' />
          </WrapperItemList>

          <WrapperItemList data={character.series.available}>
            <ItemList list={character.series.items} title='Series' />
          </WrapperItemList>

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