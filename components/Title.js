import React from "react";
import { Text, useWindowDimensions } from "react-native";
const Title = ({ text }) => {
  const { width, height } = useWindowDimensions();
  return (
    <Text
      className={`font-extrabold ${
        width > 600 && "w-screen ml-8"
      } font-open-sans-bold text-4xl border-2 p-4 m-2 text-center`}
    >
      {text}
    </Text>
  );
};

export default Title;
