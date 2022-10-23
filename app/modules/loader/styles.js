import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 30,
		backgroundColor: 'black',
		alignItems: 'center',
	},
	wrapper: {
		flex: 1,
		width: '100%'
	},
	header: {
		flex: 1,
		justifyContent: 'center',
		padding: 10,
		width: '100%',
		maxHeight: 60,
		backgroundColor: 'orange'
	},
	headerText: {
		fontSize: 20,
		color: 'white'
	}
});