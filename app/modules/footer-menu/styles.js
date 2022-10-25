import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	menu: {
		flex: 1,
		width: '100%',
		maxHeight: 40,
		flexDirection: 'row',
		backgroundColor: 'orange',
		color: 'white',
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	textColor: {
		fontSize: 18,
		color: 'white'
	},
	active: {
		fontSize: 18,
		color: 'rgb(153, 0, 0)'
	}
});