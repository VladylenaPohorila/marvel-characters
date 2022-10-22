import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { styles } from './styles';

export const Loading = () => {
	const { containerLoading } = styles;
	return (
		<View style={containerLoading}>
			<ActivityIndicator
				size='large'
				color='orange'
			/>
		</View>
	)
}