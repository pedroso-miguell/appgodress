import React from 'react';
import { View, Text } from 'react-native';
import { Tabs } from 'expo-router';
import { Ionicons, AntDesign, MaterialCommunityIcons, Fontisto } from '@expo/vector-icons';

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: '#593C9D',
                tabBarInactiveTintColor: '#593C9D99',
                tabBarStyle: { backgroundColor: 'white', height: 60 },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let iconSize = focused ? size * 1.2 : size; // Aumenta o tamanho ao ser clicado
                    if (route.name === 'home') {
                        iconName = focused ? 'home' : 'home-outline';
                        return <Ionicons name={iconName} color={color} size={iconSize} />;
                    } else if (route.name === 'armario') {
                        iconName = focused ? 'hanger' : 'hanger';
                        iconSize = focused ? size * 1.2 : size;
                        return <MaterialCommunityIcons name={iconName} color={color} size={iconSize} />;
                    } else if (route.name === 'outfit') {
                        iconSize = focused ? size * 2.3 : size * 2.1; // Aumenta o tamanho ao ser clicado
                        return (
                            <View style={{ alignItems: 'center', justifyContent: 'center', top: -12 }}>
                                <AntDesign 
                                    name="plussquare" 
                                    color='#593C9D' 
                                    size={iconSize}  // Ajusta o tamanho com base no foco
                                />
                                <Text style={{ color: '#593C9D', fontSize: 12 }}>Outfit</Text>
                            </View>
                        );
                    } else if (route.name === 'eventos') {
                        iconName = focused ? 'world' : 'world-o';
                        return <Fontisto name={iconName} color={color} size={iconSize} />;
                    } else if (route.name === 'perfil') {
                        iconName = focused ? 'person' : 'person-outline';
                        return <Ionicons name={iconName} color={color} size={iconSize} />;
                    }
                },
                tabBarIconStyle: { marginBottom: -10 },
            })}
        >
            <Tabs.Screen 
                name="home" 
                options={{ 
                    title: 'Home'
                }} 
            />
            <Tabs.Screen 
                name="armario" 
                options={{ 
                    title: 'Armário'
                }} 
            />
            <Tabs.Screen 
                name="outfit"
                options={{ 
                    title: 'Outfit',
                    tabBarLabel: '',
                }} 
            />
            <Tabs.Screen 
                name="eventos" 
                options={{ 
                    title: 'Eventos'
                }} 
            />
            <Tabs.Screen 
                name="perfil" 
                options={{ 
                    title: 'Perfil'
                }} 
            />
        </Tabs>
    );
}
