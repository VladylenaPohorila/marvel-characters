import { StyleSheet } from 'react-native';
import { marginNew } from '../../../../utilits/padding-marging';

export const styles = StyleSheet.create({
    itemWrapper: {
        padding: 10
    },
    backImg: {
        width: 30, height: 30
    },
    container: {
        flex: 0,
        ...marginNew(0, 6, 90)
    },
    itemName: {
        ...marginNew(8, 0),
        fontSize: 24,
        textAlign: 'center',
        color: 'white',
    },
    wrapperImg: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemImg: {
        width: 300,
        height: 300,
        marginBottom: 6,
    },
    itemDescription: {
        color: 'white',
        fontSize: 20,
        marginBottom: 8
    },
    containerModified: {
        width: '100%',
        alignItems: 'flex-end'
    },
    colorText: {
        fontSize: 18,
        color: 'white'
    },
    header: {
        flex: 0,
        padding: 10,
        width: '100%',
        maxHeight: 60,
        backgroundColor: 'orange'
    }
})