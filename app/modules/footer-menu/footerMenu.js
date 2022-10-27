import React from 'react';
import { Link, useLocation } from 'react-router-native';
import { View, Text } from 'react-native';
import { styles } from './styles';

export const FooterMenu = () => {
  const { menu, textColor, active } = styles;
  const { pathname } = useLocation();

  return (
    <View style={menu}>
      <Link to='/'>
        <Text style={pathname === '/' ? active : textColor}>Home</Text>
      </Link>
      <Link to='/characters'>
        <Text style={pathname === '/characters' ? active : textColor}>Characters</Text>
      </Link>
    </View>
  )
}