import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'azure',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    height: 40,
    width: 160,
    borderRadius: 5,
    backgroundColor: 'white',
    margin: 10,
    borderWidth: 1,
    padding: 10,
  },
  buttonOk: {
    borderRadius: 5,
    width: 100,
    padding: 10,
    marginTop: 10,
    elevation: 2,
    backgroundColor: '#0C2C87',
  },
  buttonCancel: {
    borderRadius: 5,
    width: 100,
    padding: 10,
    marginTop: 10,
    elevation: 2,
    backgroundColor: '#19747C',
    opacity: 0.5,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  errorMessage: {
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;