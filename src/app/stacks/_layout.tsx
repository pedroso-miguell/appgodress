import { Stack } from 'expo-router';

export default function StackLayout() {
    return (
        <Stack>
            <Stack.Screen name="inicial" options={{ title: 'Página Inicial' }} />
            <Stack.Screen name="login" options={{ title: 'Login' }} />
            <Stack.Screen name="cadastro" options={{ title: 'Cadastro' }} />
        </Stack>
    );
}
