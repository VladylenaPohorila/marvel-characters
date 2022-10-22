import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

export const Header = () => {
	const { header, headerText } = styles;

	return (
		<View style={header}>
			<Text style={headerText}>
				Characters
			</Text>
		</View>
	)
}