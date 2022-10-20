import React from 'react';
import { Text } from 'react-native';
import { styles } from './style';

export const Home = () => {
    const {text} = styles;
    
    return (
        <Text style={text}>
            Welcom, to home page
        </Text>
    )
};

