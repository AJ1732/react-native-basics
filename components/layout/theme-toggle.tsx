import { useEffect, useState } from "react";
import { View, Button } from "react-native";
import { useColorScheme } from "nativewind";

import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "theme_preference";

export default function ThemeToggleButton() {
  const { colorScheme, setColorScheme } = useColorScheme();
  const [loading, setLoading] = useState(true);
  console.log("color scheme from nativewind", colorScheme);

  useEffect(() => {
    (async () => {
      try {
        const stored = await AsyncStorage.getItem(STORAGE_KEY);
        if (stored === "light" || stored === "dark") {
          setColorScheme(stored);
        }
      } catch (e) {
        // ignore
      } finally {
        setLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggle = async () => {
    const next = colorScheme === "dark" ? "light" : "dark";
    setColorScheme(next);
    try {
      await AsyncStorage.setItem(STORAGE_KEY, next);
    } catch (e) {
      // ignore
    }
  };

  if (loading) return null; // or a small placeholder

  return (
    <View>
      <Button
        title={`Switch to ${colorScheme === "dark" ? "light" : "dark"} mode`}
        onPress={toggle}
      />
    </View>
  );
}
