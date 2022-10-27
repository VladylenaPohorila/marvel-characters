import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Outlet } from 'react-router';
import { FooterMenu } from '../footer-menu/footerMenu';
import { styles } from './styles';


export const Loader = () => {
  const { container, wrapper } = styles;

  return (
    <View style={container}>
      <View style={wrapper}>
        <Outlet />
      </View>
      <FooterMenu />
      <StatusBar style='auto' />
    </View>
  );
}
