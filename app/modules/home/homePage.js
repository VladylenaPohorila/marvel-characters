import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { Link } from 'react-router-native';
import { styles } from './styles';

export const Home = () => {
  const { text, link, backImage, content } = styles;

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={require('../../../assets/marvel.png')}
        style={backImage}
        resizeMode='cover'>
        <View style={content}>
          <Text style={text}>
            Welcome, to the Marvel world of characters
          </Text>
          <Link to='/characters'>
            <Text style={link}>Go to characters</Text>
          </Link>
        </View>
      </ImageBackground>
    </View>
  )
};

