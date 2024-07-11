import {
  Modal,
  View,
  StyleSheet,
  Button,
  Text,
  ScrollView,
  FlatList,
} from "react-native";

const NodeRetrieval = (props) => {
  const listItems = [
    "Alligator",
    "Chupacabra",
    "Beaver",
    "Cheatah",
    "Gorrilla",
    "Lion",
    "Wolf",
    "Mokey",
    "Zebra",
  ];
  return (
    <Modal animationType="slide" visible={props.showApi}>
      <View style={styles.apiContainer}>
        <Text style={styles.headerText}>Hello world</Text>
       
          <FlatList
            horizontal={true}
            data={listItems}
            style={styles.listView}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => {
              return (
                <View style={styles.itemSelf}>
                  <Text>
                    {index + 1}. {item}
                  </Text>
                </View>
              );
            }}
          />
        
        <Button
          title="Go Back"
          style={styles.button}
          onPress={props.apiModalHandler}
        />
      </View>
    </Modal>
  );
};

export default NodeRetrieval;

const styles = StyleSheet.create({
  apiContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop:35,
    borderBottomWidth: 2,
    
    flex: 1,

    backgroundColor: "black",
  },
  listView: {
    margin: 5,
  },
  itemSelf: {
    backgroundColor: "yellow",
    color: "black",
    marginTop: 10,
    marginRight:10,
    alignItems:'center',
    justifyContent:'center',
    width:100,
    height:25,
  },
  headerText: {
    color: "white",
  },
  button: {
    color: "blue",
  },
});
