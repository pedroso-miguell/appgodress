import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";


export default function Inicial() {
  const router = useRouter();

  function BtnLogin() {
    router.push("/stacks/login");
  }

  function BtnCadastro() {
    router.push("/stacks/cadastro");
  }

  return (
    <View style={styles.container}>

    <View style={styles.introducao}>
      <Text style={styles.title}>Olá!</Text>
      <Text style={styles.descricao}>Bem-vindo a GoDress</Text>
      </View>

      <Image
      source={require('../imgs/Gzao.png')}
      style={styles.logo}
    />
      
      <View style={styles.botoes}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonLogin} onPress={BtnLogin}>
          <Text style={styles.TxtBtnLogin}>Faça Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonCadastro} onPress={BtnCadastro}>
          <Text style={styles.TxtBtnCadastro}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  introducao: {
    marginLeft:20,
    marginTop: '50%',
  },
  botoes: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '45%',
  },
  logo: {
    width: 80, 
    height: 93, 
    marginBottom: 20,
    marginLeft: '70%',
    marginTop: '50%',
    position: 'absolute'
  },
  title: {
    fontSize: 60,
    fontWeight: "bold",
  },
  descricao: {
    fontSize: 18,
    marginBottom: 10,
    color: "gray",
  },
  buttonContainer: {
    width: "80%",
    alignItems: "center",
    marginTop: 10,
  },
  buttonLogin: {
    width: "100%",
    backgroundColor: "#593C9D",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  TxtBtnLogin: {
    color: "white",
    fontSize: 20,
  },
  buttonCadastro: {
    width: "100%",
    backgroundColor: "#593C9D",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  TxtBtnCadastro: {
    color: "white",
    fontSize: 20,
  },

});
