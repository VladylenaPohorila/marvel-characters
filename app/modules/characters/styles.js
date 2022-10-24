import { StyleSheet } from 'react-native';
import { marginNew } from '../../utilits/padding-marging';

export const styles = StyleSheet.create({
    link: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        ...marginNew(6, 0)
    },
    img: {
        width: 50,
        height: 50
    },
    text: {
        marginLeft: 6,
        fontSize: 18,
        color: 'white'
    }
})