import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function Form({ submitHandler }) {
  const [text, setText] = useState("");

  const changeHandler = (value) => {
    setText(value);
  };

  const pressHandler = (text) => {
    submitHandler(text);
    setText("");
  };

  return (
    <View style={styles.header}>
      <TextInput
        style={styles.input}
        placeholder="new todo..."
        onChangeText={changeHandler}
        value={text}
      />
      <Button
        onPress={() => pressHandler(text)}
        title="add todo"
        color="coral"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingHorizontal: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
