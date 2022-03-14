import React from "react"
import { View, Text, StyleSheet, Button } from "react-native";

export default function About({ navigation }) {
  /* This is an about screen
     that will be used for being embedded by the navigator.
     navigation props (served as { navigation } because of props destructuring)
     will be used for navigating between screens following by specific name */
  
  // function to navigate back to Home screen
  const navigateBackToHomeScreen = () => { navigation.goBack(); };
  
  return (
    <View style={styles.container}>
      <Text>This is an about screen</Text>

      <Button
         title="Go back to Home"
         style={styles.button}
         onPress={navigateBackToHomeScreen} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    marginTop: 10
  }
});