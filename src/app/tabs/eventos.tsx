import { StyleSheet, Text, View } from 'react-native';

export default function Eventos() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Página de Eventos</Text>
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
