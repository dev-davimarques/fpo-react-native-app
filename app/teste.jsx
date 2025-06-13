import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { Button } from "react-native";

export default function Teste() {
  const [count, setCount] = useState(0);
  
  function handleClick(){
    setCount(count + 1);
  }

  const [selectedLanguage, setSelectedLanguage] = useState("java"); // Definindo valor padrão

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecione sua linguagem preferida</Text>

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
          style={styles.picker}
          dropdownIconColor="#6200ee"
          mode="dropdown" // Ou "dialog" dependendo do comportamento desejado
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="Python" value="python" />
          <Picker.Item label="TypeScript" value="typescript" />
          <Picker.Item label="C#" value="csharp" />
        </Picker>
      </View>

      {selectedLanguage && (
        <Text style={styles.selectedText}>
          Você selecionou: {selectedLanguage.toUpperCase()}
        </Text>
      )}

      <TouchableOpacity onPress={handleClick} style={styles.button}>
          <Text style={styles.text}>Você me pressionou {count} vezes</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#112B11",
    borderRadius: 8,
    marginBottom: 20,
    overflow: "hidden", // Importante para manter o borderRadius no Picker
    backgroundColor: "white",
  },
  picker: {
    width: "100%",
    height: 50,
    color: "#333",
  },
  selectedText: {
    textAlign: "center",
    marginTop: 15,
    fontSize: 16,
    color: "#112B11",
    fontWeight: "500",
  },
  button: {
    backgroundColor: '#112B11',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff"
  }
});
