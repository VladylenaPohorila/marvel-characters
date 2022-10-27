import React from 'react';
import { ScrollView, Text, Image, View } from 'react-native';
import { WrapperItemList } from '../wrapper-item-list';
import { ItemList } from '../../item-list';
import { styles } from '../styles';

export const CharacterCard = ({ character }) => {
  const {
    container,
    wrapperImg,
    itemImg,
    itemDescription,
    containerModified,
    colorText,
    itemName } = styles;

  return (
    <ScrollView style={container}>
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
      <WrapperItemList data={character.comics.items}>
        <ItemList list={character.comics.items} title='Comics' />
      </WrapperItemList>

      <WrapperItemList data={character.stories.items}>
        <ItemList list={character.stories.items} title='Stories' />
      </WrapperItemList>

      <WrapperItemList data={character.events.items}>
        <ItemList list={character.events.items} title='Events' />
      </WrapperItemList>

      <WrapperItemList data={character.series.items}>
        <ItemList list={character.series.items} title='Series' />
      </WrapperItemList>

      <View style={containerModified}>
        <Text style={colorText}>
          {`Modified: ${character.modified.slice(0, 10)}`}
        </Text>
      </View>
    </ScrollView>
  )
}