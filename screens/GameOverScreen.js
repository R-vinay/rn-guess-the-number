import React from "react";
import { Text, View, Image } from "react-native";
import Title from "../components/Title";
import SecondaryButton from "../components/SecondaryButton";
const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
  return (
    <View className="flex-1 items-center align-middle mt-8">
      <Title text={"Game Over"} />
      <View className="m-3 rounded-[200px] w-48 h-48 overflow-hidden border-4 border-blue-800">
        <Image
          className="w-full h-full"
          source={require("../assets/success.png")}
        />
      </View>
      <View className="m-2">
        <Text className="font-open-sans text-lg text-center">
          Your phone needed{" "}
          <Text className="font-open-sans-bold font-bold">{roundsNumber}</Text>{" "}
          rounds to guess the number{" "}
          <Text className="font-open-sans-bold font-bold">{userNumber}</Text>.
        </Text>
        <SecondaryButton title={"Start New Game"} touchFn={onStartNewGame} />
      </View>
    </View>
  );
};

export default GameOverScreen;
