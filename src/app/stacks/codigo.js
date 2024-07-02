import {StyleSheet, Text, View, TouchableOpacity, Image, TextInput,} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons, AntDesign, MaterialIcons, Fontisto} from '@expo/vector-icons';

export default function Codigo() {
  const router = useRouter();

  function BtnEnviar() {
    router.push("/stacks/redefinir");
  }

  return (
    <View style={styles.container}>
      <View style={styles.introducao}>
        <Text style={styles.redefinir}>Coloque o</Text>
        <Text style={styles.redefinir2}>código enviado</Text>
        <Text style={styles.redefinir3}>em seu email</Text>
      </View>

      <Image source={require("../imgs/Gzao.svg")} style={styles.logo} />
      <View style={styles.info}>
      <MaterialIcons name="system-security-update-good" size={90} color="black" />

      <Text style={styles.texto}>
        Um código de 6 dígitos foi enviado para
        seu e-mail (...)
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Insira o código"
          numberOfLines={50}
          placeholderTextColor="gray"
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonEntrar} onPress={BtnEnviar}>
            <Text style={styles.TxtBtnEntrar}>Enviar</Text>
          </TouchableOpacity>
        <Text style={styles.reenviar}>
       Reenviar Código
        </Text>
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
    marginLeft: 10,
    marginTop: "30%",
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 20,
    marginLeft: "78%",
    marginTop: "45%",
    position: "absolute",
  },
  input: {
    marginTop: 10,
    borderColor: "black",
    color: "black",
    backgroundColor: "lightgray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    width: "90%",
    height: 50,
  },
  info: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: "35%",
  },
  redefinir: {
    fontSize: 40,
    marginBottom: 10,
    marginTop: "5%",
  },
  redefinir2: {
    fontSize: 40,
    marginBottom: 10,
  },
  redefinir3: {
    fontSize: 40,
    marginBottom: 10,
  },
  buttonContainer: {
    width: "80%",
    alignItems: "center",
    marginTop: "25%",
  },
  buttonEntrar: {
    width: "100%",
    backgroundColor: "#593C9D",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  TxtBtnEntrar: {
    color: "white",
    fontSize: 20,
  },
  texto: {
    fontSize: 14,
    color: "gray",
    marginTop: 10,
  },
  reenviar: {
    fontSize: 15,
    color: "gray",
    marginTop: 10,
    fontWeight: 'bold',
  },
});
