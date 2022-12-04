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
          <Text
            style={{
              fontSize: 18,
              fontStyle: "italic",
              fontWeight: "bold",
              padding: 40,
            }}
          >
            Meet our Team
          </Text>

         
          
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default About;
