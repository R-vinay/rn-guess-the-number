import React, { useEffect, useState } from "react";
import { Alert, FlatList, Text, View } from "react-native";
import Title from "../components/Title";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import { Ionicons } from "@expo/vector-icons";
import LogList from "../components/LogList";
function generateRandomNumbersBetween(min, max, exclude) {
  const random_number = Math.floor(Math.random() * (max - min)) + min;
  if (random_number === exclude) {
    return generateRandomNumbersBetween(min, max, exclude);
  } else {
    return random_number;
  }
}
let minBoundary = 1;
let maxBoundary = 100;
const GameScreen = ({ userNumber, handleGameOver }) => {
  const initialGuess = generateRandomNumbersBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([
    { id: 1, data: initialGuess },
  ]);
  useEffect(() => {
    if (currentGuess === userNumber) {
      handleGameOver(guessRounds.length);
      return;
    }
  }, [currentGuess, userNumber]);
  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);
  function nextGuessHandler(direction) {
    if (currentGuess === userNumber) {
      // Alert.alert("Computer Won !", "Computer guessed your number", [
      //   { text: "Okay", style: "destructive" },
      // ]);
      return;
    }
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Bogus Prompt", "You know that's a wrong hint!", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    } else if (direction === "lower") {
      maxBoundary = currentGuess;
    } else if (direction === "higher") {
      minBoundary = currentGuess + 1;
    }
    console.log(minBoundary, maxBoundary);
    const newPhoneGuess = generateRandomNumbersBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newPhoneGuess);
    setGuessRounds((prevGuesses) => [
      { id: newPhoneGuess, data: newPhoneGuess },
      ...prevGuesses,
    ]);
    if (newPhoneGuess === userNumber) {
      // Alert.alert("Computer Won !", "Computer guessed your number", [
      //   { text: "Okay", style: "destructive" },
      // ]);
      return;
    }
  }
  return (
    <View className="flex-1 items-center align-middle mt-8">
      <View>
        <Title text={"Opponent's Guess"} />
        <NumberContainer currentNumber={currentGuess} />
        <View className="flex flex-row">
          <View className="flex-1">
            <PrimaryButton
              title={<Ionicons name="remove-circle-outline" size={24} />}
              touchFn={() => {
                nextGuessHandler("lower");
              }}
            />
          </View>
          <View className="flex-1">
            <SecondaryButton
              title={<Ionicons name="add-circle-outline" size={24} />}
              touchFn={() => {
                nextGuessHandler("higher");
              }}
            />
          </View>
        </View>
        <View className="flex-1">
          <FlatList
            data={guessRounds}
            renderItem={(items) => {
              return (
                <LogList
                  item={items.item.data}
                  round={guessRounds.length - 1 - items.index}
                />
              );
            }}
            keyExtractor={(item, id) => item.id}
          />
        </View>
      </View>
    </View>
  );
};

export default GameScreen;
