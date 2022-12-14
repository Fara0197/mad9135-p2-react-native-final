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
  ScrollView,
} from "react-native";
import { useCallback } from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { useFonts } from "expo-font";

function Home({ navigation }) {
  const [text, setText] = useState("");
  const [input, setInput] = useState("");

  const confirmEmail = () => {
    Alert.alert("Confirm", "do you want to submit this email?", [
      { text: "yes", onPress: () => console.log("pressed the option yes") },
      { text: "no", onPress: () => noOption() },
    ]);
  };

  const noOption = () => {
    setText("");
  };

  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../assets/fonts/PatrickHand-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          padding: 10,
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          backgroundColor: "#f5ebe0",
        }}
      >
        <View
          onLayout={onLayoutRootView}
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: 4,
          }}
        >
          <ScrollView>
            {/* <Searchbar placeholder="Search" onChangeText={(text) => {
					setInput(text);
				}}
        style={{
          textAlign: 'center',
           fontSize: 20,
           fontFamily: 'Inter-Black',
           backgroundColor: "#f5ebe0",
           
         }}
				value={input}/> */}
            <StatusBar style="auto" />
            <Text
              style={{
                textAlign: "center",
                fontSize: 30,
                fontFamily: "Inter-Black",
                padding: 20,
              }}
            >
              Artayo
            </Text>
            <Image
              style={{ width: 350, height: 300 }}
              source={require("../assets/art-gallery.png")}
            />
            <Button
              title="About Us"
              color="#ca5310"
              onPress={() => navigation.navigate("ABOUT")}
            />

            <Text
              style={{
                fontFamily: "Inter-Black",
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

            <Text
              style={{
                fontSize: 12,
                fontFamily: "Inter-Black",
                padding: 20,
              }}
            >
              Subscribe to our newsletter to recieve latest information on
              events, shows and more!
            </Text>

            <TextInput
              onChangeText={(newText) => setText(newText)}
              keyboardType="email-address"
              style={{
                textAlign: "center",
                fontSize: 15,
                backgroundColor: "#f5ebe0",
                marginLeft: 70,
                width: "60%",
                borderWidth: 1,
                borderColor: "#fb8500",
                borderRadius: 8,
                padding: 10,
              }}
              placeholder="type your email here"
            />
            <Button
              color="#ca5310"
              title="Submit"
              onPress={() => confirmEmail()}
            ></Button>
            <Text
              style={{
                fontSize: 20,
                textAlign: "center",
                fontFamily: "Inter-Black",
                margin: 4,
              }}
            >
              {" "}
              Welcome to Artayo! {text}
            </Text>
          </ScrollView>
        </View>
        <StatusBar style="light" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default Home;
