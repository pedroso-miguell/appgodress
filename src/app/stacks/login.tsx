import { StyleSheet, Text, View, Button } from 'react-native';

export default function Login() {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Página de Login</Text>
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
    
});
