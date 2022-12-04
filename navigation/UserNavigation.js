//what this file does: kind of similiar to app.js ..where it is controlling the bottom tab navigation
//when clicking on user tab icon, along with going to user page, should also have the control of two screens

import User from "../components/Team";
import Details from "../components/Details";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const UserStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#d5bdaf" },
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontSize: 15,
        },
        tabBarActiveTintColor: "#e07a5f",
        tabBarInactiveTintColor: "black",
      }}
    >
      <Stack.Screen name="Novemeber's Artwork Database" component={User} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export { UserStackNavigation };
