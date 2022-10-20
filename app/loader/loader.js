import React from 'react';
import { StatusBar } from 'expo-status-bar';
//import {Outlet} from 'react-router';
import { Text, View } from 'react-native';
import {Home} from '../home/home-page';
import {style} from './style';

export const Loader = () => {
    const {container, wrapper, header, headerText} = style;

    return (
      <View style={container}>
        <View style={header}>
            <Text style={headerText}>
                Characters
            </Text>
        </View>
        <View style={wrapper}>
          <Home/>
        </View>
        <StatusBar style='auto' />
      </View>
    );
}
