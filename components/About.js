import { View, Text, Button, Image, StyleSheet } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
function About({props}) {
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
        

         
          
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default About;
