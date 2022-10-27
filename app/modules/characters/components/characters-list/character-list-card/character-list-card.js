import React from 'react';
import { ScrollView, TouchableOpacity, Image, Text } from 'react-native';
import { useOutletContext } from 'react-router';
import { NoResults } from '../../no-results';
import { styles } from '../styles';

export const CharacterListCard = ({ characters, onPress }) => {
  const { listWrapper, link, img, text } = styles;
  const { searchQuery } = useOutletContext();

  return (
    characters.total === 0 ?
      <NoResults text={searchQuery} /> :
      <ScrollView style={listWrapper}>
        {characters && characters.results.map(character => (
          <TouchableOpacity
            style={link}
            key={character.id}
            id={character.id}
            onPress={() => onPress(character.id)}>
            <Image source={{
              uri: `${character.thumbnail.path}.${character.thumbnail.extension}`
            }}
              style={img} />
            <Text style={text}>{character.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
  )
}