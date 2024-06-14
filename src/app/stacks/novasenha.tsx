import {StyleSheet, Text, View, TouchableOpacity, Image, TextInput,} from "react-native";
import { Link, useRouter } from "expo-router";

export default function NovaSenha() {
  const router = useRouter();

  function BtnRedefinir() {
    router.push("/stacks/inicial");
  }

  return (
    <View style={styles.container}>
      <View style={styles.introducao}>
        <Text style={styles.novasenha}>Nova Senha</Text>
      </View>

      <Image source={require("../imgs/Gzao.svg")} style={styles.logo} />
      <View style={styles.info}>
        <TextInput
          style={styles.input}
          placeholder="Nova senha"
          placeholderTextColor="gray"
        />

        <TextInput
          style={styles.input}
          placeholder="Confirmar Senha"
          placeholderTextColor="gray"
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonEntrar} onPress={BtnRedefinir}>
            <Text style={styles.TxtBtnEntrar}>Redefinir</Text>
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
    marginLeft: 20,
    marginTop: "50%",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    marginLeft: "70%",
    marginTop: "48%",
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
  novasenha: {
    fontSize: 40,
    marginBottom: 10,
    marginTop: "5%",
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
