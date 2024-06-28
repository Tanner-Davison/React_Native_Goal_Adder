import { View, Text, StyleSheet, Pressable, } from "react-native";

const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Pressable 
      onPress={props.onDelete.bind(this, props.id)}
      style={({pressed})=> pressed && styles.pressedItem || styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
    </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    position:'relative',
    margin: 3,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    justifyContent:'center',
    height:50,
  },
  pressedItem:{
    opacity:1,
    backgroundColor:"crimson",
    height:50,
    justifyContent:'center',
    borderRadius:6,

  },
  goalText: {
    position:'relative',
    color: "white",
    alignSelf:'center',
 
    
  },
});
