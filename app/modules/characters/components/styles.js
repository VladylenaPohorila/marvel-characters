import { StyleSheet } from 'react-native';
import { marginNew } from '../../../utilits/padding-marging';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        ...marginNew(0, 6)
    },
    itemName: {
        ...marginNew(8, 0),
        fontSize: 24,
        textAlign: 'center',
        color: 'white',
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
    containerList: {
        marginBottom: 8,
    },
    listTitle: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white'
    },
    containerModified: {
        width: '100%',
        alignItems: 'flex-end'
    },
    colorText: {
        fontSize: 18,
        color: 'white'
    }

})