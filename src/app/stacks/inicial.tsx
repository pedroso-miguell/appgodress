import { StyleSheet, Text, View, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Inicial() {
    const router = useRouter();

    function BtnLogin() {
        router.push('/stacks/login');
    }

    function BtnCadastro() {
        router.push('/stacks/cadastro');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Página Inicial</Text>
            <View style={styles.buttonContainer}>
                <Button title="Ir para Login" onPress={BtnLogin} />
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Ir para Cadastro" onPress={BtnCadastro} />
            </View>
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
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    buttonContainer: {
        marginVertical: 10,
    },
});
