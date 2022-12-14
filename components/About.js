import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  FlatList,
  TouchableHighlight,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { teamList } from "../data/About";
import React, { Component } from "react";
import { FlashList } from "@shopify/flash-list";
import { useFonts } from "expo-font";
export default class Art extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderList = ({ item }) => {
    return (
      <TouchableHighlight>
        <View style={{ display: "flex", padding: 10 }}>
          <Text
            style={{
              fontFamily: "Inter-Black",
              backgroundColor: "#fbc4ab",

              fontSize: 25,
            }}
          >
            {item.title}
          </Text>

          <Text
            style={{
              fontFamily: "Inter-Black",
              paddingTop: 10,
              fontSize: 15,
            }}
          >
            about -{item.about}
          </Text>
          <View
            style={{ display: "flex", padding: 10, alignItems: "flex-end" }}
          >
            <Image
              style={{
                borderRadius: 200 / 2,
                overflow: "hidden",
                borderWidth: 1,
                borderColor: "#faedcd",
                width: 150,
                height: 150,
              }}
              source={item.image}
            />
          </View>
        </View>
      </TouchableHighlight>
    );
  };

  render() {
    return (
      <SafeAreaProvider>
        <SafeAreaView
          style={{
            flex: 1,
            justifyContent: "center",
            padding: 10,

            backgroundColor: "#f5ebe0",
          }}
        >
          <FlashList
            data={teamList}
            renderItem={this.renderList}
            estimatedItemSize={200}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }
}
