import React from "react";

import MainScreen from "../screens/MainScreen";
import AboutPost from "../screens/AboutPost";
import { createStackNavigator } from "@react-navigation/stack";

const NavigationApp = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AboutPost"
        component={AboutPost}
        options={{
          title: "Info",
          headerBackTitle: "Back",
        }}
      />
    </Stack.Navigator>
  );
};

export default NavigationApp;
