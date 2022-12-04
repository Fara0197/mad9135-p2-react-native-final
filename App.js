import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./components/Home";
import About from "./components/About"

import { UserProvider } from "./context/userContext";
import { UserStackNavigation } from "./navigation/UserNavigation";
import Ionicons from "react-native-vector-icons/Ionicons";
export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <UserProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#ffcdb2" },
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 20,
            },
            tabBarActiveTintColor: "#e07a5f",
            tabBarInactiveTintColor: "black",
          }}
        >
          <Tab.Screen
   
            name="ARTAYO"
            component={Home}
            options={{
              tabBarIcon: ({ focused, size, color }) =>
                focused ? (
                  <Ionicons name={"home"} size={size} color={color} />
                ) : (
                  <Ionicons name={"ios-home"} size={size} color={color} />
                ),
            }}
          />
                  <Tab.Screen
            name="ABOUT"
            component={About}
            options={{
              tabBarIcon: ({ focused, size, color }) =>
                focused ? (
                  <Ionicons name={"about"} size={size} color={color} />
                ) : (
                  <Ionicons name={"ios-people"} size={size} color={color} />
                ),
            }}
          />
          <Tab.Screen
            name="ARTISTS"
            component={UserStackNavigation}
            options={{
              tabBarIcon: ({ focused, size, color }) =>
                focused ? (
                  <Ionicons name={"brush"} size={size} color={color} />
                ) : (
                  <Ionicons name={"ios-brush"} size={size} color={color} />
                ),
            }}
          />

          
        </Tab.Navigator>
      </NavigationContainer>
    </UserProvider>
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