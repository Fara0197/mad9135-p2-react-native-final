import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  Animated,
  TextInput,
  Alert,
  findNodeHandle,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

function Home({ navigation }) {
  const [text, setText] = useState("");

  const confirmEmail = () =>{
    Alert.alert("Confirm","do you want to submit this email?",[
      {text: "yes", onPress:()=>console.log("pressed the option yes")},
      {text: "no", onPress:()=>noOption()}
    ])
  }

  const noOption = () =>{
    setText("");
  }
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
            At Artayo, we host and manage the display and records of artists
            around the globe. Every month, we showcase themed artists at our
            gallery. We are based in Ottawa, Ontario.
          </Text>

          <Button
            title="About Us"
            color="#ca5310"
            onPress={() => navigation.navigate("ABOUT")}
          />

          <Text
            style={{
              fontSize: 12,

              padding: 20,
            }}
          >
            Subscribe to our newsletter to recieve latest information on events,
            shows and more!
          </Text>

          <TextInput
            onChangeText={(newText) => setText(newText)}
            
            keyboardType="email-address"
            style={{
              fontSize: 15,
              backgroundColor: "#f5ebe0",
              width: "100%",
              borderWidth: 1,
              borderColor: "#fbc4ab",
              borderRadius: 8,
              padding: 10,
            }}
            placeholder="type your email here"
          />
          <Button color="#ca5310" title="submit" onPress={()=>confirmEmail()}></Button>
          <Text> Thanks for joining us: {text}</Text>
        </View>
        <StatusBar style="light" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default Home;
