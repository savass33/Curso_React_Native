import { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";

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

  function cancelHandler() {
    props.onCancel();
    setEnteredGoalText(""); // Limpa o campo ao cancelar
  }

  return (
    <Modal visible={props.visible} animationType="fade">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/favicon.png")} />
        <TextInput
          style={styles.textInput}
          placeholder="Digite sua meta"
          value={enteredGoalText}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Adicionar" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancelar" onPress={cancelHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1, // Ocupa 1 parte do layout total
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#6695ebff",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#d0d5ffff",
    width: "100%",
    color: "#120438",
    borderRadius: 8,
    padding: 15,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
    opacity: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 15,
  },
  button: {
    width: "100px",
    marginHorizontal: 8,
  },
});
