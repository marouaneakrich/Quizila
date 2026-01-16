import { View, TextInput, Button } from "react-native";
import { useState } from "react";
import { useAuthStore } from "../src/stores/auth.store";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const register = useAuthStore(state => state.register);

  return (
    <View>
      <TextInput
        placeholder="Email"
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
      />
      <Button
        title="Register"
        onPress={() => register(email, password)}
      />
    </View>
  );
}
