import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRouter } from 'expo-router';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

// Defina as cenas para cada aba (mantido o mesmo código anterior)
const TudoRoute = () => (
    <View style={styles.scene}>
        <Text>Conteúdo "Tudo"</Text>
    </View>
);

const OutfitsRoute = () => (
    <View style={styles.scene}>
        <Text>Conteúdo "Outfits"</Text>
    </View>
);

const ShortsRoute = () => (
    <View style={styles.scene}>
        <Text>Conteúdo "Shorts"</Text>
    </View>
);

const CalcasRoute = () => (
    <View style={styles.scene}>
        <Text>Conteúdo "Calças"</Text>
    </View>
);

const AgasalhosRoute = () => (
    <View style={styles.scene}>
        <Text>Conteúdo "Agasalhos"</Text>
    </View>
);

const CamisetasRoute = () => (
    <View style={styles.scene}>
        <Text>Conteúdo "Camisetas"</Text>
    </View>
);

const SapatosRoute = () => (
    <View style={styles.scene}>
        <Text>Conteúdo "Sapatos"</Text>
    </View>
);

export default function Home() {
    const router = useRouter();
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'tudo', title: 'Tudo' },
        { key: 'outfits', title: 'Outfits' },
        { key: 'shorts', title: 'Shorts' },
        { key: 'calcas', title: 'Calças' },
        { key: 'agasalhos', title: 'Agasalhos' },
        { key: 'camisetas', title: 'Camisetas' },
        { key: 'sapatos', title: 'Sapatos' },
    ]);

    const renderScene = SceneMap({
        tudo: TudoRoute,
        outfits: OutfitsRoute,
        shorts: ShortsRoute,
        calcas: CalcasRoute,
        agasalhos: AgasalhosRoute,
        camisetas: CamisetasRoute,
        sapatos: SapatosRoute,
    });

    return (
        <View style={{ flex: 1 }}>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: Dimensions.get('window').width }}
                renderTabBar={props => 
                    <TabBar 
                        {...props} 
                        indicatorStyle={styles.indicator} 
                        style={styles.tabbar} 
                        labelStyle={styles.label}
                        scrollEnabled={true} // Permite rolar horizontalmente se houver muitas abas
                        tabStyle={styles.tabStyle}
                    />
                }
            />
            {/* Ícone de máquina de lavar */}
            <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => router.push('/stacks/lavanderia')}
            >
                <Icon name="washing-machine" size={30} color="white" />
            </TouchableOpacity>

            {/* Ícone de escanear */}
            <TouchableOpacity
                style={[styles.iconContainer, { bottom: 80 }]} // Ajuste a posição conforme necessário
                onPress={() => {
                    // Adicione a navegação para a tela de escanear aqui
                }}
            >
                <Icon name="scan-helper" size={30} color="white" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    separator: {
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        marginBottom: 10,
        paddingTop: '5%',
    },
    scene: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabbar: {
        backgroundColor: '#fff', // Cor de fundo das abas
    },
    indicator: {
        backgroundColor: 'black', // Cor do indicador da aba selecionada
        height: 3, // Altura do indicador
    },
    label: {
        color: 'black', // Cor do texto das abas
        fontSize: 14, // Tamanho da fonte das abas
        textTransform: 'none', // Desabilita a transformação de texto
    },
    tabStyle: {
        width: 'auto', // Largura automática para cada aba
        paddingHorizontal: 12, // Espaçamento horizontal
    },
    iconContainer: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#593C9D',
        borderRadius: 50,
        padding: 10,
        elevation: 5, // Adiciona sombra no Android
        shadowColor: '#000', // Adiciona sombra no iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
});
