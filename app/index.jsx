import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import { Button } from "react-native-paper";


export default function Index() {
  return (
    <View style={styles.container}>
      {/* <Text>Página Inicial</Text> */}

      <View>
        <Button 
            mode="contained"
            style={styles.button}
        >
          <Link href={"/profile"} style={styles.text}>Ir para a Tela Profile</Link>
        </Button>

        <Button 
          mode="contained" 
          // onPress={() => console.log("Clicado")}
          style={styles.button}
          >
          <Link href={"/teste"} style={styles.text}>Ir para a Tela Teste</Link>
        </Button>
      </View>

      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: '#112B11',
    borderRadius: 20,
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
