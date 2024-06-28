import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";
import Goals from "../assets/GOALS.png";
const GoalInput = (props) => {
  const [userGoal, setUserGoal] = useState("");
  const [focused, setFocused] = useState(false);

  const handleGoalChange = (enteredText) => {
    setUserGoal(enteredText);
  };
  const onFocus = () => {
    setFocused(true);
    console.log("focused now");
  };
  const onBlur = () => {
    setFocused(false);
  };

  const addGoalHandler = () => {
    props.onAddGoal(userGoal);
    setUserGoal("");
  };

  return (
    <Modal visible={props.showmodal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={Goals} width={10} height={10} />

        <TextInput
          style={focused ? styles.focused : styles.textInput}
          placeholder="Your list of goals"
          onChangeText={handleGoalChange}
          value={userGoal}
          onFocus={() => onFocus()}
          onBlur={() => onBlur()}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.buttons}>
            <Button
              title="+ Add Goal"
              onPress={addGoalHandler}
              color="#b180f0"
            />
          </View>
          <View style={styles.buttons}>
            <Button title="Close" color="#f31282" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    borderBottomWidth: 2,
    flex: 1,

    backgroundColor: "black",
  },
  buttonContainer: {
    flexDirection: "row-reverse",
    padding: 10,
    margin: 10,
  },
  buttons: {
    width: 100,
    marginHorizontal: 10,
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccccc",
    width: "100%",
    marginRight: 8,
    padding: 16,
    alignItems: "center",
    borderRadius: 8,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    boderRadius: 6,
    color: "#120438",
  },
  focused: {
    borderWidth: 1,
    borderColor: "#cccccccc",
    width: "100%",
    marginRight: 8,
    padding: 16,
    alignItems: "center",
    borderRadius: 8,
    borderColor: "purple",
    backgroundColor: "black",
    color: "white",
    boderRadius: 6,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
});
