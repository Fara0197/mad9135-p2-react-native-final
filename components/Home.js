import { View, Text, Button, Image, StyleSheet } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from 'expo-status-bar';
function Home( {navigation }) {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          backgroundColor: "#f5ebe0",
        }}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
   
          <Image
            style={{ width: 350, height: 300 }}
            source={require("../assets/art-gallery.png")}
          />

          <Text
            style={{
              fontSize: 15,
              fontWeight: "light",
              padding: 20,
              lineHeight: 30,
            }}
          >
            <span style={{ fontSize: 20, fontWeight: "bold" }}>About</span>{" "}
            <br></br>At Artayo, we host and manage the display and
            records of artists around the globe. Every month, we showcase themed
            artists at our gallery. We are based in Ottawa, Ontario. 

          </Text>
 

          <Button
            title="About Us"
            color="#ca5310"
            onPress={() => navigation.navigate("ABOUT")}
          />
        </View>
        <StatusBar style="light" />

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default Home;
