import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    button: {
      width: "100%",
      marginTop: 10
    },  
    cancelButton: {
      backgroundColor: "#c00"
    },
    container: {
      flex: 1,
      backgroundColor: '#ccc',
      alignItems: 'center',
      justifyContent: 'center',
    },
    maskedInput: {
      flexGrow: 1,
      height: 40,
      fontSize: 18,
      borderBottomColor: "#999",
      borderBottomWidth: 1,
      borderStyle: "solid",
      alignSelf: "flex-start"
    },
    containerMask: {
      flexDirection: "row",
      marginBottom: 5,
      marginLeft: 10,
      marginRight: 10
    },
    errorMessage: {
      alignSelf: "flex-start",
      marginLeft: 15,
      color: "#f00",
      fontSize: 12
    }
  });

export default styles