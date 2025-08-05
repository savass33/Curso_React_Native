import { Text, StyleSheet, View } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 6,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#e2e2e2",
    color: "black",
  },
  goalText: {
    color: "#ffffff",
  },
});
