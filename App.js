// Importa hooks e componentes do React Native necessários para manipulação de estado e construção da interface
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

// Função principal que define o componente da aplicação
export default function App() {
  // Estado para armazenar o texto digitado pelo usuário
  const [enteredGoalText, setEnteredGoalText] = useState("");

  // Estado para armazenar a lista de metas adicionadas
  const [courseGoals, setCourseGoals] = useState([]);

  // Função para validar o texto inserido: verifica se está vazio ou duplicado
  function verifyInput() {
    if (enteredGoalText.trim().length === 0) {
      alert("Por favor, digite uma meta válida!");
      return false;
    } else if (courseGoals.some((goal) => goal.text === enteredGoalText)) {
      alert("Essa meta já foi adicionada!");
      return false;
    }
    return true;
  }

  // Função chamada toda vez que o usuário digita no TextInput
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText); // Atualiza o estado com o novo valor
  }

  // Função chamada ao pressionar o botão "Adicionar"
  function addGoalHandler() {
    if (verifyInput()) {
      // Adiciona uma nova meta ao estado, com texto e chave única
      setCourseGoals((currentCourseGoals) => [
        ...currentCourseGoals,
        { text: enteredGoalText, key: Math.random().toString() },
      ]);
      setEnteredGoalText(""); // Limpa o campo de texto após adicionar
    }
  }

  // Função chamada ao pressionar o botão "Limpar"
  function clearGoals() {
    setCourseGoals([]); // Limpa todas as metas
    setEnteredGoalText(""); // Limpa o campo de entrada
  }

  // JSX que representa a interface do aplicativo
  return (
    <View style={styles.appContainer}>
      {/* Área de entrada de texto e botão de adicionar */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Digite sua meta"
          value={enteredGoalText}
          onChangeText={goalInputHandler}
        />
        <Button title="Adicionar" onPress={addGoalHandler} color="#e2e2e2" />
      </View>

      {/* Área onde as metas são exibidas */}
      <View style={styles.goalsContainer}>
        <Text style={styles.goalsTitle}>Minhas Metas</Text>

        {/* FlatList é melhor para listas porque renderiza apenas os itens visíveis na tela, economizando recursos.
            ScrollView pode ser usado, mas FlatList é mais eficiente para listas longas */}
        <FlatList
          data={courseGoals} // Fonte de dados da lista
          renderItem={(itemData) => {
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => {
            return item.key; // Define qual chave usar para identificar cada item
          }}
        />
      </View>

      {/* Botão para limpar a lista */}
      <Button title="Limpar" onPress={clearGoals} color="#e2e2e2" />
    </View>
  );
}

// Estilos usados para configurar a aparência dos componentes
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
    backgroundColor: "#ffffff", // Corrigido: "#white" não é uma cor válida
  },
  inputContainer: {
    flex: 1, // Ocupa 1 parte do layout total
    flexDirection: "row", // Alinha elementos lado a lado
    justifyContent: "space-between", // Espaço entre botão e campo
    alignItems: "center", // Centraliza verticalmente
    marginBottom: 0,
    marginTop: 0,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%", // Ocupa 70% da largura disponível
    padding: 15,
    borderRadius: 6,
  },
  goalsTitle: {
    marginVertical: 1,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#e2e2e2",
    color: "black",
    textAlign: "center", // Centraliza o texto
  },
  goalsContainer: {
    flex: 4, // Ocupa mais espaço que a inputContainer
  },
  goalItem: {
    marginVertical: 6,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#e2e2e2",
    color: "black",
  },
  button: {
    // Este estilo não está sendo utilizado diretamente
    color: "white",
    height: "100%",
    width: "30%",
    borderRadius: 20,
    backgroundColor: "#e2e2e2",
  },
  goalText: {
    color: "white", // Define a cor do texto dentro da meta
  },
});
