import { Stack } from "expo-router";
import { useColorScheme, View } from "react-native";

import { Navigation } from "@/components/layout";

import "../global.css";
import ThemeToggleButton from "@/components/layout/theme-toggle";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  return (
    <View className="size-full w-screen bg-white pt-14">
      <Stack
        screenOptions={{
          headerShown: false,
          // headerStyle: { backgroundColor: "#ddd" },
          // headerTintColor: "#333"
        }}
      >
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="about" options={{ title: "About" }} />
        <Stack.Screen name="contact" options={{ title: "Contact" }} />
      </Stack>
      <ThemeToggleButton />
      <Navigation />
    </View>
  );
}
