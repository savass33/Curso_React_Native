import { use, useState } from "react";
import {
  StyleSheet,
  Button,
  TextInput,
  View,
  Text,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function verifyInput() {
    if (enteredGoalText.trim().length === 0) {
      alert("Por favor, digite uma meta válida!");
      return false;
    } else if (courseGoals.includes(enteredGoalText)) {
      alert("Essa meta já foi adicionada!");
      return false;
    }
    return true;
  }

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    if (verifyInput()) {
      setCourseGoals((currentCourseGoals) => [
        ...currentCourseGoals,
        { text: enteredGoalText, key: Math.random().toString() },
      ]);
      setEnteredGoalText("");
    }
  }
  function clearGoals() {
    setCourseGoals([]);
    setEnteredGoalText("");
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Digite sua meta"
          value={enteredGoalText}
          onChangeText={goalInputHandler}
        />
        <Button title="Adicionar" onPress={addGoalHandler} color="#e2e2e2" />
      </View>
      <View style={styles.goalsContainer}>
        <Text style={styles.goalsTitle}>Minhas Metas</Text>

        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
            );
          }}
        />
      </View>

      <Button title="Limpar" onPress={clearGoals} color="#e2e2e2" />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
    backgroundColor: "#white",
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 0,
    marginTop: 0,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    padding: 15,
    borderRadius: 6,
  },
  goalsTitle: {
    marginVertical: 1,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#e2e2e2",
    color: "black",
    alignContent: "center",
    textAlign: "center",
  },

  goalsContainer: {
    flex: 4,
  },
  goalItem: {
    marginVertical: 6,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#e2e2e2",
    color: "black",
  },
  button: {
    color: "white",
    height: "100%",
    width: "30%",
    borderRadius: 20,
    backgroundColor: "#e2e2e2",
  },
  goalText: {
    color: "white",
  },
});
