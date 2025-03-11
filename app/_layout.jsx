import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="funny" options={{ headerShown: false, headerTitle:false }} />
      <Stack.Screen name="song" options={{ headerShown: false, headerTitle:false }} />
    </Stack>
  );
}





