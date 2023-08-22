/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./src/navigation";

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="default" />
      <Navigation />
    </SafeAreaProvider>
  );
}

export default App;
