import {StyleSheet,Text,View,TouchableOpacity,Image,TextInput,ScrollView,} from "react-native";
import { useRouter } from "expo-router";
import {MaterialIcons} from "@expo/vector-icons";

export default function Codigo() {
  const router = useRouter();

  function BtnEnviar() {
    router.push("/stacks/novasenha");
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.introducao}>
          <Text style={styles.redefinir}>Coloque o</Text>
          <Text style={styles.redefinir2}>código enviado</Text>
          <Text style={styles.redefinir3}>em seu email</Text>
        </View>

        <Image source={require("../imgs/Gzao.png")} style={styles.logo} />
        <View style={styles.info}>
          <MaterialIcons
            name="system-security-update-good"
            size={90}
            color="black"
          />

          <Text style={styles.texto}>
            Um código de 6 dígitos foi enviado para seu e-mail (...)
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Insira o código"
            numberOfLines={50}
            placeholderTextColor="gray"
          />

          <Text style={styles.reenviar}>Reenviar Código</Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonEnviar} onPress={BtnEnviar}>
              <Text style={styles.TxtBtnEnviar}>Enviar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
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
    height: 93,
    marginBottom: 20,
    marginLeft: "75%",
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
    fontSize: 35,
    marginBottom: 10,
    marginTop: "5%",
  },
  redefinir2: {
    fontSize: 35,
    marginBottom: 10,
  },
  redefinir3: {
    fontSize: 35,
    marginBottom: 10,
  },
  buttonContainer: {
    width: "80%",
    alignItems: "center",
    marginTop: "10%",
  },
  buttonEnviar: {
    width: "100%",
    backgroundColor: "#593C9D",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  TxtBtnEnviar: {
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
    fontWeight: "bold",
  },
});