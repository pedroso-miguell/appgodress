import { StyleSheet, Text, View, Button} from 'react-native';
import { Link, router } from 'expo-router'

export default function Home() {
            function handleNavigate(){
                    router.replace("/dashboard")
            }







    return(
        <View style={styles.container}>
            <Text>Página Home</Text>
            <Link href={"/cadastro"}>Ir para outra página</Link>
            <Button title="Navegar para o painel" onPress={handleNavigate} />
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