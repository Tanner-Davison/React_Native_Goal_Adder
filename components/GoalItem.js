import { View, Text, StyleSheet, Pressable, } from "react-native";

const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Pressable 
      onPress={props.onDelete.bind(this, props.id)}
      style={({pressed})=> pressed && styles.pressedItem}>
      <Text style={styles.goalText}>{props.text}</Text>
    </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem:{
    opacity:1,
    backgroundColor:"red",
    borderRadius:6,
    color:'black',

  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
