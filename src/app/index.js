import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useRouter } from 'expo-router';

const Logo = require('./imgs/Spash.png');


export default function Inicial() {
    const router = useRouter();

    function BtnInicial() {
        router.push('/stacks/inicial');
    }

    function BtnHome() {
        router.push('/tabs/home');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tela Spash</Text>
            <Image source={Logo} style={styles.logo} />
            <View style={styles.buttonContainer}>
                <Button title="Ir para Página Inicial" onPress={BtnInicial} color="#593C9D"/>
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Ir para Home" onPress={BtnHome} color="#593C9D"/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#593C9D',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        color:'white',
    },
    logo: {
        width: 220, 
        height: 180, 
        borderRadius: 10,
        marginBottom: 20, 
    },
    buttonContainer: {
        marginVertical: 10,
    },
});
