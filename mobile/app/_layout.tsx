import { Stack } from "expo-router";
import { useAuthStore } from "./src/stores/auth.store";

export default function RootLayout() {
  const isAuthenticated = useAuthStore(
    state => state.isAuthenticated
  );

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {!isAuthenticated ? (
        <Stack.Screen name="(auth)" />
      ) : (
        <Stack.Screen name="(tabs)" />
      )}
    </Stack>
  );
}
