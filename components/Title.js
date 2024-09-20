import React from "react";
import { Text } from "react-native";
const Title = ({ text }) => {
  return (
    <Text className="font-extrabold font-open-sans-bold text-4xl border-2 p-4 m-2 text-center">
      {text}
    </Text>
  );
};

export default Title;
