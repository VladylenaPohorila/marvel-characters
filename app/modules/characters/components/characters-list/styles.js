import { StyleSheet } from 'react-native';
import { marginNew } from '../../../../utilits/padding-marging';

export const styles = StyleSheet.create({
  headerWrapper: {
    padding: 10
  },
  header: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    width: '100%',
    backgroundColor: 'orange'
  },
  headerText: {
    fontSize: 20,
    color: 'white'
  },
  listWrapper: {
    marginBottom: 120
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