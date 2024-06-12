// app/tabs/_layout.tsx
import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons, AntDesign, MaterialCommunityIcons, Fontisto} from '@expo/vector-icons';

export default function TabsLayout() {
    return (
        <Tabs>
            <Tabs.Screen 
                name="home" 
                options={{ 
                    title: 'Home', 
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home-outline" color={color} size={size} />
                    ),
                }} 
            />
            <Tabs.Screen 
                name="armario" 
                options={{ 
                    title: 'Armário', 
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="hanger" color={color} size={size} />
                    ),
                }} 
            />
            <Tabs.Screen 
                name="outfit"
                options={{ 
                    title: 'Outfit', 
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="plussquare" color={'#593C9D'} size={size} />
                    ),
                }} 
            />
            <Tabs.Screen 
                name="eventos" 
                options={{ 
                    title: 'Eventos', 
                    tabBarIcon: ({ color, size }) => (
                        <Fontisto name="world-o" color={color} size={size} />
                    ),
                }} 
            />
            <Tabs.Screen 
                name="perfil" 
                options={{ 
                    title: 'Perfil', 
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person-outline" color={color} size={size} />
                    ),
                }} 
            />
        </Tabs>
    );
}
