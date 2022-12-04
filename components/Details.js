import React from "react";
import { View, Text } from "react-native";
import { useUser } from "../context/userContext";

import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
function Details({ route }) {
  const [users] = useUser();
  const user = users.find((a) => a.id === route.params.id);
  console.log(user);

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          backgroundColor: "#f7ece1",
        }}
      >
        <View>
          <Text style={{ fontSize: 30, fontWeight: "bold", padding: 15 }}>
            {user.title}
          </Text>

          <Text style={{ fontSize: 20, fontWeight: "light", padding: 15 }}>
            {user.artist_display}
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "light", padding: 15 }}>
            {user.dimensions}
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "light", padding: 15 }}>
            {user.department_title}
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "light", padding: 15 }}>
            {user.medium_display}
          </Text>

          <Text style={{ fontSize: 10, fontWeight: "light", padding: 20 }}>
            {user.credit_line}
          </Text>
          <Text style={{ fontSize: 8, fontWeight: "light", padding: 20 }}>
            {user.place_of_origin}
          </Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default Details;
