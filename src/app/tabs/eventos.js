import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Eventos() {
    // Função para excluir um evento
    const handleDeleteEvent = (eventoId) => {
        // Lógica para excluir o evento com o ID eventoId
        console.log(`Evento ${eventoId} excluído`);
    };

    return (
        <View style={styles.container}>
            <View style={styles.separator}></View>

            <View style={styles.eventosContainer}>
                <TouchableOpacity style={styles.eventoContainer} onPress={() => handleDeleteEvent(1)}>
                    <View style={styles.eventoContent}>
                        <Text style={styles.eventoText}>Show</Text>
                        <Icon name="trash-can-outline" size={24} color="#593C9D" style={styles.icon} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.eventoContainer} onPress={() => handleDeleteEvent(2)}>
                    <View style={styles.eventoContent}>
                        <Text style={styles.eventoText}>Academia</Text>
                        <Icon name="trash-can-outline" size={24} color="#593C9D" style={styles.icon} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.eventoContainer} onPress={() => handleDeleteEvent(3)}>
                    <View style={styles.eventoContent}>
                        <Text style={styles.eventoText}>Restaurante</Text>
                        <Icon name="trash-can-outline" size={24} color="#593C9D" style={styles.icon} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.eventoContainer} onPress={() => handleDeleteEvent(4)}>
                    <View style={styles.eventoContent}>
                        <Text style={styles.eventoText}>Faculdade</Text>
                        <Icon name="trash-can-outline" size={24} color="#593C9D" style={styles.icon} />
                    </View>
                </TouchableOpacity>
            </View>

            {/* Botão para adicionar categoria */}
            <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>Adicionar Categoria</Text>
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
    separator: {
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        marginBottom: 10,
        paddingTop: '5%',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    eventosContainer: {
        marginTop: 10,
    },
    eventoContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        marginBottom: 10,
    },
    eventoContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },
    eventoText: {
        fontSize: 16,
        color: '#593C9D',
    },
    icon: {
        marginLeft: 'auto',
    },
    addButton: {
        backgroundColor: '#593C9D',
        borderRadius: 10,
        paddingVertical: 15,
        alignItems: 'center',
        marginTop: 20,
    },
    addButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
    },
});
