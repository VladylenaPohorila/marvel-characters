import React from 'react';
import { Text, View } from 'react-native';
import { Link } from 'react-router-native';
import { styles } from './styles';

export const Home = () => {
	const { text, link } = styles;

	return (
		<View>
			<Text style={text}>
				Welcom, to home page
			</Text>
			<Link to='/characters'>
				<Text style={link}>Go to all characters</Text>
			</Link>
		</View>
	)
};

