import { StyleSheet } from 'react-native';
import { paddingNew } from '../../../../utilits/padding-marging';

export const styles = StyleSheet.create({
    searchWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 16
    },
    searchInput: {
        flex: 2,
        ...paddingNew(0, 4),
        borderWidth: 1,
        borderColor: 'rgb(153, 0, 0)'
    },
    searchText: {
        marginLeft: 4,
        fontSize: 18,
        color: 'white'
    }
})