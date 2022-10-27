import { StyleSheet } from 'react-native';
import { paddingNew } from '../../../../utilits/padding-marging';

export const styles = StyleSheet.create({
  searchWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
    borderWidth: 1,
    borderColor: 'rgb(153, 0, 0)',
    padding: 6,
    color: 'white'
  },
  searchInput: {
    flex: 2,
    ...paddingNew(0, 4),
    fontSize: 20,
    color: 'white'
  }
})