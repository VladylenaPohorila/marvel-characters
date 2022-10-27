import React from 'react';
import { View, TextInput, Image } from 'react-native';
import { useOutletContext } from 'react-router';
import { styles } from './styles';

export const Search = () => {
  const { searchWrapper, searchInput } = styles;
  const { searchQuery, setSearchQuery } = useOutletContext();

  return (
    <View style={searchWrapper}>
      <TextInput
        style={searchInput}
        placeholder='Name'
        value={searchQuery}
        type='text'
        onChangeText={text => setSearchQuery(text)} />
      <Image
        style={{ width: 20, height: 20 }}
        resizeMode='stretch'
        source={require('../../../../../assets/search-white.png')} />
    </View>
  )
}