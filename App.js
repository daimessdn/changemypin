import React from "react";

// importing navigator dependencies
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import this for using custom fonts
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

// importing screen components
import Home from "./screens/Home"
import About from "./screens/About";

// initiate navigators
const Stack = createStackNavigator(),
      BottomTab = createBottomTabNavigator();

// in case of using Stack navigator only
const StackElement = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="About" component={About} />
  </Stack.Navigator>
);

/* rendering main application
   in case of rendering <StackElement /> only,
   we can put <StackElement /> inside NavigationContainer element.
   we can also put other elements inside it by replacing <StackElement />
   with the desired elements
*/
export default function App() {
  let [fontsLoaded] = useFonts({
    'DMSans-Bold': require('./assets/fonts/dmsans/DMSans-Bold.ttf'),
    'DMSans-Regular': require('./assets/fonts/dmsans/DMSans-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <StackElement />
      </NavigationContainer>
    );
  }
};