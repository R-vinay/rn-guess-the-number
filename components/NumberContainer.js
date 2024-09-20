import React from "react";
import { Text } from "react-native";

const NumberContainer = ({ currentNumber }) => {
  return (
    <Text className="bg-orange-300 mt-5 items-center p-4 border-2 border-orange-400 rounded-md text-center text-2xl text-white font-bold">
      {currentNumber}
    </Text>
  );
};

export default NumberContainer;
