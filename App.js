import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StyleSheet, View, FlatList, Button } from "react-native";

export default function App() {
  const [allGoals, setAllGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const modalHandler = () => {
    setModalVisible(!modalVisible);
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
    <StatusBar style='light'/>
    <View style={styles.appContainer}>
      <Button title={"Add New Goal"} color="#a065ec" onPress={modalHandler} />

      <GoalInput
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
});
