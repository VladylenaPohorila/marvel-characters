import { StyleSheet } from 'react-native';
import { marginNew } from '../../../../utilits/padding-marging';

export const styles = StyleSheet.create({
    header: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        width: '100%',
        backgroundColor: 'orange'
    },
    headerText: {
        fontSize: 20,
        color: 'white'
    },
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