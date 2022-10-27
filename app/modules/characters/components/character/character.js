import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { View, Image, TouchableOpacity } from 'react-native';
import { UrlCharacter } from '../../../../utilits/getData';
import { WrapperLoading } from '../wrapper-loading';
import { CharacterCard } from './character-card/character-card';
import { styles } from './styles';

export const Character = () => {
  const { itemWrapper,
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
      <WrapperLoading data={character}>
        <CharacterCard character={character} />
      </WrapperLoading>
    </View>
  )
}