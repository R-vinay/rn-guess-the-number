import React from "react";
import { Pressable, Text, View } from "react-native";

const SecondaryButton = ({ title, touchFn }) => {
  return (
    <View className=" m-2 rounded-[25px] overflow-hidden">
      <Pressable
        onPress={touchFn}
        className="p-4  bg-black items-center opacity-0.75"
        android_ripple={{ color: "gray" }}
      >
        <Text className="text-white font-bold text-md">{title}</Text>
      </Pressable>
    </View>
  );
};

export default SecondaryButton;
