import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  SafeAreaView,
  useWindowDimensions,
  KeyboardAvoidingView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

// Prevent auto-hiding the splash screen
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [userChosenNumber, setUserChosenNumber] = useState("");
  const [gameOver, setGameOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);
  const { width, height } = useWindowDimensions();
  // console.log(width, height);
  // Load fonts
  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      // Hide the splash screen once fonts are loaded
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  // Show nothing (or a fallback UI) until fonts are loaded
  if (!fontsLoaded) {
    return null;
  }

  function handlePickedNumber(user_picked_number) {
    setUserChosenNumber(user_picked_number);
    setGameOver(false);
  }

  function handleGameOver(rounds) {
    setGameOver(true);
    setGuessRounds(rounds);
  }

  function startNewGameHandler() {
    setUserChosenNumber("");
    setGuessRounds(0);
  }

  let screen =
    userChosenNumber === "" ? (
      <StartGameScreen onConfirmPick={handlePickedNumber} />
    ) : gameOver && userChosenNumber ? (
      <GameOverScreen
        userNumber={userChosenNumber}
        roundsNumber={guessRounds}
        onStartNewGame={startNewGameHandler}
      />
    ) : (
      <GameScreen
        userNumber={userChosenNumber}
        handleGameOver={handleGameOver}
      />
    );

  return (
    <LinearGradient
      className="flex-1"
      colors={["#FFDE4D", "#F9E400", "#FFB22C", "#FF4C4C"].reverse()}
    >
      <ImageBackground
        source={require("./assets/background.png")}
        resizeMode="cover"
        className="flex-1"
        imageStyle={{ opacity: 0.15 }}
      >
        <SafeAreaView className="flex-1">{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}
