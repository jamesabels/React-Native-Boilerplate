import {StyleSheet} from 'react-native'

export const LayoutStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
  pageWrap: {
    flex: 11,
    padding: 0,
    marginTop: 44,
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  content: {
    padding: 20 
  } 
});

export const ButtonStyles = StyleSheet.create({
  button: {
    marginTop: 10,
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5
  },
  buttonText: {
    textAlign: 'center',
    color: 'white'
  } 
});