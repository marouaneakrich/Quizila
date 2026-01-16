import { View, TextInput, Button } from "react-native";
import { useState } from "react";
import { useAuthStore } from "../src/stores/auth.store";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const login = useAuthStore(state => state.login);

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
                title="Login"
                onPress={() => login(email, password)}
            />
        </View>
    );
}
