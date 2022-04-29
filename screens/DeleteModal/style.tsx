import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: '90%',
    margin: 20,
    backgroundColor: 'azure',
    borderRadius: 20,
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
  modalText: {
    marginBottom: 10,
    fontSize: 18,
    width: 160,
    textAlign: 'center',
  },
  buttonDeleteAll: {
    borderRadius: 5,
    width: 100,
    padding: 10,
    marginTop: 20,
    elevation: 2,
    backgroundColor: '#9C210E',
  },
  buttonCancel: {
    borderRadius: 5,
    width: 100,
    padding: 10,
    marginTop: 20,
    elevation: 2,
    backgroundColor: '#19747C',
    opacity: 0.5,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;