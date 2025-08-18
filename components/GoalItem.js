import { Text, StyleSheet, View, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#9c9c9cff" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={(pressed) => pressed.pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 6,
    borderRadius: 6,
    backgroundColor: "#635903ff",
    color: "black",
  },
  goalText: {
    color: "#ffffff",
    padding: 8,
    borderRadius: 6,
  },
  pressedItem: {
    opacity: 0.5,
  },
});
