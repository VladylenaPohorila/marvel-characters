import { StyleSheet } from 'react-native';
import { paddingNew } from '../../utilits/padding-marging';

export const styles = StyleSheet.create({
  backImage: {
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    marginBottom: 16,
    padding: 10,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    fontSize: 24,
    textAlign: 'center',
    color: 'white'
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  link: {
    marginBottom: 10,
    ...paddingNew(2, 6, 4),
    maxWidth: 300,
    textAlign: 'center',
    backgroundColor: 'orange',
    borderRadius: 4,
    fontSize: 24,
    color: 'white'
  }
});
