import {StyleSheet, Text, View, TouchableOpacity, Image, TextInput} from "react-native";
import { Link, useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();

  function BtnLogin() {
    router.push("/stacks/login");
  }

  return (
    <View style={styles.container}>
      <View style={styles.introducao}>
        <Text style={styles.descricao}>Faça Login</Text>
      </View>

      <Image source={require("../imgs/Gzao.svg")} style={styles.logo} />
      <View style={styles.info}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          autoComplete="email"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          autoCapitalize="none"
          secureTextEntry
        />

      
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonEntrar} onPress={BtnLogin}>
            <Text style={styles.TxtBtnEntrar}>Entrar</Text>
          </TouchableOpacity>

          <Link href="/stacks/redefinir" style={styles.link}>
            Esqueceu a Senha
          </Link>
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
    marginTop: "50%",
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
    marginTop: 10,
  },
  info: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: "45%",
  },
  descricao: {
    fontSize: 40,
    marginBottom: 10,
    marginTop: "5%",
  },
  buttonContainer: {
    width: "80%",
    alignItems: "center",
    marginTop: 10,
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
  link: {
    fontSize: 18,
    color: "gray",
    marginTop: 10,
  },
});
