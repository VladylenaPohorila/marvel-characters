import React from 'react';
import { Text, View } from 'react-native';
import { useNavigate, useOutletContext } from 'react-router';
import { WrapperLoading } from '../wrapper-loading';
import { Search } from '../search';
import { CharacterListCard } from './character-list-card/character-list-card';
import { styles } from './styles';

export const CharactersList = () => {
  const { header, headerText, headerWrapper } = styles;
  const navigate = useNavigate();
  const { data: characters, searchQuery, ...rest } = useOutletContext();
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
      <WrapperLoading data={characters}>
        <CharacterListCard characters={characters} onPress={goToItem} />
      </WrapperLoading>
    </View>
  )
}