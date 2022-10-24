import React from 'react';
import { Link } from 'react-router-native';
import { View, Text } from 'react-native';
import { styles } from './styles';

export const FooterMenu = () => {
	const { menu, textColor, active } = styles;
	return (
		<View style={menu}>
			<Link to='/'>
				<Text style={textColor}>Home</Text>
			</Link>
			<Link to='/characters'>
				<Text style={textColor}>Characters</Text>
			</Link>
		</View>
	)
}