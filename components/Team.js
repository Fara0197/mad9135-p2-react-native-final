import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { useUser } from "../context/userContext";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import UserItem from "./TeamItem";
import React from "react";

function User({ navigation }) {
  const [users] = useUser();

  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  if (!users) {
    return null;
  }

  return (
    <>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <>
          <StatusBar style="dark" />

          <FlatList
            data={users}
            renderItem={({ item }) => (
              <UserItem
                user={item}
                onPress={() => navigation.navigate("Details", { id: item.id })}
              />
            )}
            keyExtractor={(item) => `${item.id}`}
          />
        </>
      )}
    </>
  );
}

export default User;
