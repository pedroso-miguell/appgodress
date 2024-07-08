import { Stack } from 'expo-router';
import "../styles/global.css";

export default function Layout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }}/>
            <Stack.Screen name="stacks" options={{ headerShown: false }} />
            <Stack.Screen name="tabs" options={{ headerShown: false }} />
        </Stack>
    );
}
