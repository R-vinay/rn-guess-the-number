import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import Title from "../components/Title";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
const StartGameScreen = ({ onConfirmPick }) => {
  const [enteredNumber, setEnteredNumber] = useState("");
  function handleInput(input_from_text_box) {
    setEnteredNumber(input_from_text_box);
  }
  function resetInput() {
    setEnteredNumber("");
  }
  function handleConfirm() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || enteredNumber <= 0 || enteredNumber > 99) {
      Alert.alert("Invalid Input", "Please enter a valid number from 1 - 99", [
        { text: "Okay", style: "destructive", onPress: resetInput },
      ]);
      return;
    } else if (enteredNumber === "") {
      Alert.alert("Empty Values", "Empty values not allowed");
      return;
    }
    onConfirmPick(chosenNumber);
    console.log("Valid input");
  }

  return (
    <View className="flex-1 mt-8">
      <Title text={"Guess My Number"} />
      <View
        style={styles.inputContainer}
        className="flex items-center align-middle mr-2 ml-2 rounded-md p-4 mt-8 bg-orange-400"
      >
        <TextInput
          className="text-center bg-white text-black p-2 border-2 border-black rounded-md text-md w-[50%] mb-4"
          maxLength={2}
          value={enteredNumber}
          onChangeText={handleInput}
          keyboardType="number-pad"
        />
        <View className="flex flex-row">
          <View className="flex-1">
            <PrimaryButton
              title={<Ionicons name="reload-outline" size={24} />}
              touchFn={resetInput}
            />
          </View>
          <View className="flex-1">
            <SecondaryButton
              title={<MaterialIcons name="done-outline" size={24} />}
              touchFn={handleConfirm}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    elevation: 4,
    //ios styling
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
