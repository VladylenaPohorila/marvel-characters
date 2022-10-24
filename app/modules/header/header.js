import React from 'react';
import { useNavigate } from 'react-router';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export const Header = () => {
	const { header, headerText } = styles;
	const navigate = useNavigate();
	const goBack = () => navigate('../.');

	return (
		<View style={header}>
			<View>
				<Text style={headerText}>
					Characters
				</Text>
			</View>
			<TouchableOpacity
				onPress={() => goBack()}>
				<Text style={headerText}>Back</Text>
			</TouchableOpacity>
		</View>
	)
}