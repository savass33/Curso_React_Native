import { useState } from "react";
import { StyleSheet, Button, View, Text, FlatList } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

// Função principal que define o componente da aplicação
export default function App() {
  // Estado para armazenar a lista de metas adicionadas
  const [courseGoals, setCourseGoals] = useState([]);

  // Função para validar o texto inserido: verifica se está vazio ou duplicado
  function verifyInput(enteredGoalText) {
    if (enteredGoalText.trim().length === 0) {
      alert("Por favor, digite uma meta válida!");
      return false;
    } else if (courseGoals.some((goal) => goal.text === enteredGoalText)) {
      alert("Essa meta já foi adicionada!");
      return false;
    }
    return true;
  }

  // Função chamada ao pressionar o botão "Adicionar"
  function addGoalHandler(enteredGoalText) {
    if (verifyInput(enteredGoalText)) {
      // Adiciona uma nova meta ao estado, com texto e chave única
      setCourseGoals((currentCourseGoals) => [
        ...currentCourseGoals,
        { text: enteredGoalText, key: Math.random().toString() },
      ]);
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
      <GoalInput onAddGoal={addGoalHandler} />

      {/* Área onde as metas são exibidas */}
      <View style={styles.goalsContainer}>
        <Text style={styles.goalsTitle}>Minhas Metas</Text>

        {/* FlatList é melhor para listas porque renderiza apenas os itens visíveis na tela, economizando recursos.
            ScrollView pode ser usado, mas FlatList é mais eficiente para listas longas */}
        <FlatList
          data={courseGoals} // Fonte de dados da lista
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} />; // Renderiza cada item da lista usando o componente GoalItem
          }}
          keyExtractor={(item, index) => {
            return item.id; // Define qual chave usar para identificar cada item
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
    backgroundColor: "#ffffff",
  },
  goalsTitle: {
    marginVertical: 1,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#e2e2e2",
    color: "black",
    textAlign: "center",
  },
  goalsContainer: {
    flex: 4,
  },
});
