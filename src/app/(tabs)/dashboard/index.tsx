import { StyleSheet, Text, View, Button} from 'react-native';
import { Link, router } from 'expo-router'

export default function Dashboard() {
    return(
        <View style={styles.container}>
            <Text>Página Painel</Text>
            <Button title="Ir para home" onPress={() => router.replace("/")} />
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});