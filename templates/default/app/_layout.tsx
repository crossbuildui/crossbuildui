import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar'; // Renamed for clarity
import 'react-native-reanimated';
import { ThemeProvider } from '@crossbuildui/core';

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  // Handle font loading state
  if (!loaded && !error) {
    return null;
  }

  // Optionally, handle font loading error
  // if (error) { console.error("Font loading error:", error); /* Render fallback */ }

  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <ExpoStatusBar style="auto" />
    </ThemeProvider>
  );
}
