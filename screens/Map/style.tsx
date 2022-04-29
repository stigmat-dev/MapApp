import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  saveCurrentLocation: {
    position: 'absolute',
    top: 'auto',
    bottom: 30,
    borderRadius: 10,
    width: 150,
    padding: 10,
    backgroundColor: '#3F7AFF',
    borderColor: 'white',
    borderWidth: 1,
    zIndex: 1,
  },
  saveTextStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;