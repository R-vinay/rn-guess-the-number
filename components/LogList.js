import React from "react";
import { View, Text } from "react-native";
const LogList = ({ item, round }) => {
  return (
    <View className="p-4 border-2 rounded-md m-2">
      <Text className="text-center">
        Round #{round + 1} Opponent's Guess {item}
      </Text>
    </View>
  );
};

export default LogList;
