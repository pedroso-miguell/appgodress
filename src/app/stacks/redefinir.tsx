import {StyleSheet, Text, View, TouchableOpacity, Image, TextInput,} from "react-native";
import { Link, useRouter } from "expo-router";

export default function Redefinir() {
  const router = useRouter();

  function BtnEnviar() {
    router.push("/stacks/redefinir");
  }

  return (
    <View style={styles.container}>
      <View style={styles.introducao}>
        <Text style={styles.redefinir}>Redefinir Sua</Text>
        <Text style={styles.redefinir2}>Senha</Text>
      </View>

      <Image source={require("../imgs/Gzao.svg")} style={styles.logo} />
      <View style={styles.info}>
        <TextInput
          style={styles.input}
          placeholder="Digite aqui"
          placeholderTextColor="gray"
        />

        <Text style={styles.texto}>
          Você IRÁ RECEBER um e-mail no endereço informado acima {"\n"}
          contendo o procedimento para criar uma nova senha para esse usúario
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonEntrar} onPress={BtnEnviar}>
            <Text style={styles.TxtBtnEntrar}>Enviar</Text>
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
    marginLeft: 10,
    marginTop: "50%",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    marginLeft: "70%",
    marginTop: "55%",
    position: "absolute",
  },
  input: {
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
    fontSize: 10,
    color: "gray",
    marginTop: 10,
  },
});
