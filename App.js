import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <View className=" justify-center items-center flex-1">
        <Text>Belly1st</Text>
        <Text className="text-pink-500 ">Foods made easy for you and me </Text>

        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}
