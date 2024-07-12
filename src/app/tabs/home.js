import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRouter } from 'expo-router';

export default function Index() {
    const router = useRouter();

    // Função para navegar para a tela de eventos
    const navigateToEventos = () => {
        router.push('/tabs/eventos');
    };

    // Função para navegar para a tela de lavanderia
    const navigateToLavanderia = () => {
        router.push('/stacks/lavanderia');
    };

    return (
        <View style={styles.container}>
          
            <View style={styles.welcomeContainer}>
                <View>
                    <Text style={styles.welcomeText}>Olá, User!</Text>
                    <Text style={styles.subText}>Que tal esse look para hoje?</Text>
                </View>
            </View>

         
            <View style={styles.lookContainer}>
                <View style={styles.row}>
                    <View style={[styles.square, styles.bigSquare]}></View>
                    <View style={[styles.square, styles.bigSquare]}></View>
                </View>
                <View style={[styles.square, styles.wideSquare]}></View>
            </View>


            <TouchableOpacity
                style={styles.notificationContainer}
                onPress={navigateToEventos}
            >
                <View style={styles.notificationContent}>
                    <Icon name="bell" size={24} color="#593C9D" style={styles.icon} />
                    <Text style={styles.notificationText}>Você tem (x) eventos próximos</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.notificationContainer, styles.bottomNotification]}
                onPress={navigateToLavanderia}
            >
                <View style={styles.notificationContent}>
                    <Icon name="washing-machine" size={24} color="#593C9D" style={styles.icon} />
                    <Text style={styles.notificationText}>Roupas sujas</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 20,
    },
    welcomeContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingTop: '30%',
        marginBottom: 10,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    subText: {
        fontSize: 16,
        color: 'gray',
    },
    lookContainer: {
        alignItems: 'center',
        marginBottom: 20,
        marginLeft: 25,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
    },
    square: {
        width: 100,
        height: 100,
        backgroundColor: '#E0E0E0',
        marginHorizontal: 5,
        marginTop: 10,
    },
    bigSquare: {
        width: 160,
        height: 160,
    },
    wideSquare: {
        width: 240,
        height: 140,
        marginRight:25,
    },
    notificationContainer: {
        marginTop: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    notificationContent: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    icon: {
        marginRight: 10,
    },
    notificationText: {
        fontSize: 16,
        color: '#593C9D',
    },
    bottomNotification: {
        marginBottom: 20,
    },
});
