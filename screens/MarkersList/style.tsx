import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    backgroundColor: 'azure',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatList: {
    width: '100%',
    marginLeft: 75,
  },
  bigTitle: {
    maxHeight: 50,
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  menu: {
    position: 'absolute',
    left: 'auto',
    right: 30,
    top: 55,
  },
  card: {
    flex: 0,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'blue',
    width: '80%',
    marginBottom: 15,
    minHeight: 70,
    padding: 15,
    backgroundColor: '#3F7AFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    maxHeight: 50,
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#3F7AFF',
    color: 'white',
  },
});

export default styles;
