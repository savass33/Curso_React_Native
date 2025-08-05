import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

function GoalInput(props) {
  // Estado para armazenar o texto digitado pelo usuário
  const [enteredGoalText, setEnteredGoalText] = useState("");

  // Função chamada toda vez que o usuário digita no TextInput
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText); // Atualiza o estado com o novo valor
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText); // Chama a função passada como prop para adicionar a meta
    setEnteredGoalText(""); // Limpa o campo de texto após adicionar
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Digite sua meta"
        value={enteredGoalText}
        onChangeText={goalInputHandler}
      />
      <Button title="Adicionar" onPress={addGoalHandler} color="#e2e2e2" />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1, // Ocupa 1 parte do layout total
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
});
