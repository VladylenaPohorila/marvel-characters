import React from 'react';
import { Text, View } from 'react-native';
import { Link } from 'react-router-native';
import { styles } from './styles';

export const FooterMenu = () => {
	const { menu, textColor } = styles;
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