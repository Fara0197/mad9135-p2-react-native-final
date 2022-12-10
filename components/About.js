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

export default class Art extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderList = ({ item }) => {
    return (
      <TouchableHighlight>
        <View style={{ justifyContent: 'flex-end', width: 300}}>
          <Text
          style={{marginLeft: 'auto',
          fontSize: 12}}
          >
            title:
            {item.title}
          </Text>

          <Image
            style={{
              borderRadius: 150 / 2,
              overflow: "hidden",
              borderWidth: 1,
              width: 50,
              height: 50,
            }}
            source={item.image}
          />
        </View>
      </TouchableHighlight>
    );
  };

  render() {
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
            <Text style={{ fontSize: 20, padding: 20 }}>Meet the team</Text>
            <FlatList
              data={teamList}
              renderItem={this.renderList}
              keyExtractor={(item) => item.id}
            />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }
}
