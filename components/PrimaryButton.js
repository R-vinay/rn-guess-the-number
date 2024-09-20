import React from "react";
import { Pressable, Text, View } from "react-native";

const PrimaryButton = ({ title, touchFn }) => {
  return (
    <View className=" m-2 rounded-[25px] overflow-hidden">
      <Pressable
        onPress={touchFn}
        className="p-4  bg-red-600 items-center "
        android_ripple={{ color: "red" }}
      >
        <Text className="text-white font-bold text-md">{title}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;
