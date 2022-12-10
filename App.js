import { StyleSheet, Text, View, ActivityIndicator} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./components/Home";
import About from "./components/About"
import Art from "./components/Art"
import SplashScreen from './components/SplashScreen';
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
              name="Art"
              component={Art}
              options={{
                tabBarIcon: ({ focused, size, color }) =>
                  focused ? (
                    <Ionicons name={"brush"} size={size} color={color} />
                  ) : (
                    <Ionicons name={"ios-brush"} size={size} color={color} />
                  ),
              }}
            />
                    <Tab.Screen
              name="ABOUT"
              component={About}
              options={{
                tabBarIcon: ({ focused, size, color }) =>
                  focused ? (
                    <Ionicons name={"people"} size={size} color={color} />
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
                    <Ionicons name={"search"} size={size} color={color} />
                  ) : (
                    <Ionicons name={"ios-search"} size={size} color={color} />
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
