import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text>Profile Page</Text>
      <Link href={"/index"}>Ir para a Página Inicial</Link>
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
});
