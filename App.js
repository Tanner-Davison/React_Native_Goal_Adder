import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StyleSheet,Keyboard, View, FlatList, Text, Pressable } from "react-native";

export default function App() {
  const [allGoals, setAllGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [focused, setFocused] = useState(false);
  const modalHandler = () => {
    setModalVisible(!modalVisible);
  };
  const onFocus = () => {
    setFocused(true);
    console.log("focused now");
  };
  const onBlur = () => {
    setFocused(false);
    Keyboard.dismiss()
    console.log('discontinue focus')
  };
  const goalEndHandler = () => {
    setModalVisible(false);
  };
  const deleteGoalHandler = (id) => {
    console.log("DELETE");
    setAllGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  };
  const addGoalHandler = (enteredText) => {
    setAllGoals((prev) => [
      ...prev,
      { text: enteredText, id: Math.random().toString() },
    ]);
    goalEndHandler();
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Pressable
          style={({ pressed }) => {
            return pressed
              ? styles.pressedGoalInput // Combine styles for the pressed state
              : styles.addGoalBtn;
          }}
          underlayColor="#0056b3"
          onPress={modalHandler}
        >
          <Text style={styles.buttonText}> Add New Goal</Text>
        </Pressable>

        <GoalInput
          onFocus={onFocus}
          onBlur={onBlur}
          focused={focused}
          onAddGoal={addGoalHandler}
          showmodal={modalVisible}
          onCancel={goalEndHandler}
        />

        <View style={styles.goalsContainer}>
          <FlatList
            data={allGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  id={itemData.item.id}
                  text={itemData.item.text}
                  onDelete={deleteGoalHandler}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    position: "relative",
    paddingHorizontal: 16,
    paddingTop: 45,
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
    borderBottomWidth: 2,
    flex: 1,
    borderBottomColor: "#cccccccc",
  },

  goalsContainer: {
    flex: 4,
  },
  addGoalBtn: {
    position: "absolute",
    bottom: 50,
    width: "90%",
    alignSelf: "center",
    borderRadius: 8,
    borderWidth: 3,
    padding: 10,
    backgroundColor: "black",
    zIndex: 2,
  },
  pressedGoalInput: {
    position: "absolute",
    bottom: 50,
    width: "90%",
    alignSelf: "center",
    borderRadius: 8,
    borderWidth: 3,
    padding: 10,
    backgroundColor: "#001221",
    zIndex: 2,
  },
  buttonText: {
    color: "white",
    alignSelf: "center",
  },
});
