import {Modal, View, StyleSheet, Button, Text} from 'react-native'


const NodeRetrieval = (props) => {
  return (
    <Modal animationType='slide' visible={props.showApi}>
      <View style={styles.apiContainer}>
        <Text style={styles.headerText}>Hello world</Text>
        <Button title="Go Back" style={styles.button} onPress={props.apiModalHandler}/>
      </View>
    </Modal>
  )
}

export default NodeRetrieval

const styles = StyleSheet.create({
    apiContainer:{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 16,
        borderBottomWidth: 2,
        flex: 1,
    
        backgroundColor: "black",

    },
    headerText:{
        color:'white',
    },
    button: {
        color: 'blue',
     
      },
})