import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, ScrollView } from 'react-native';
import { Outlet } from 'react-router';
import { CharactersContextProvider } from '../../context/useCharactersContext';
import { FooterMenu } from '../footer-menu/footerMenu';
import { Header } from '../header/header';
import { styles } from './styles';


export const Loader = () => {
	const { container, wrapper } = styles;

	return (
		<View style={container}>
			<Header />
			<View style={wrapper}>
				<CharactersContextProvider>
					<Outlet />
				</CharactersContextProvider>
			</View>
			<FooterMenu />
			<StatusBar style='auto' />
		</View>
	);
}
