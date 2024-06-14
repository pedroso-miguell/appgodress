import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Alert, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from '@expo/vector-icons';

export default function Cadastro() {
  const router = useRouter();

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [gender, setGender] = useState('');

  const [open, setOpen] = useState(false);

  function BtnCadastrar() {
    if (password !== confirmPassword) {
      Alert.alert("Erro", "As senhas não coincidem.");
    } else {
      // Lógica para processar os dados de cadastro
      Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
      router.push("/stacks/login");
    }
  }

  function handleGenderSelection(selectedGender: string) {
    setGender(selectedGender);
  }

  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.introducao}>
        <Text style={styles.descricao}>Cadastre-se</Text>
      </View>

      <Image source={require("../imgs/Gzao.svg")} style={styles.logo} />

      <View style={styles.info}>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          placeholderTextColor="gray"
          selectionColor="purple"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Sobrenome"
          placeholderTextColor="gray"
          selectionColor="purple"
          value={surname}
          onChangeText={setSurname}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          placeholderTextColor="gray"
          autoComplete="email"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="gray"
          autoCapitalize="none"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirmar Senha"
          placeholderTextColor="gray"
          autoCapitalize="none"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <Text style={styles.texto}>
          Gênero
        </Text>

        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={[styles.checkbox, gender === 'masculino' ? styles.checked : null]}
            onPress={() => handleGenderSelection('masculino')}
          >
            <Ionicons name="man" size={24} color={gender === 'masculino' ? 'white' : 'black'} />
            <Text style={[styles.checkboxText, gender === 'masculino' ? { color: 'white' } : null]}>Masculino</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.checkbox, gender === 'feminino' ? styles.checked : null]}
            onPress={() => handleGenderSelection('feminino')}
          >
            <Ionicons name="woman" size={24} color={gender === 'feminino' ? 'white' : 'black'} />
            <Text style={[styles.checkboxText, gender === 'feminino' ? { color: 'white' } : null]}>Feminino</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.checkbox, gender === 'unisex' ? styles.checked : null]}
            onPress={() => handleGenderSelection('unisex')}
          >
            <Ionicons name="transgender" size={24} color={gender === 'unisex' ? 'white' : 'black'} />
            <Text style={[styles.checkboxText, gender === 'unisex' ? { color: 'white' } : null]}>Unisex</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonEntrar} onPress={BtnCadastrar}>
            <Text style={styles.TxtBtnEntrar}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </ScrollView>
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
    marginTop: "35%",
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
  texto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "gray",
    marginTop: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    marginTop: 10,
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  checkboxText: {
    marginLeft: 8,
  },
  checked: {
    backgroundColor: '#593C9D',
    padding: 10,
    borderRadius: 5,
  },
});
