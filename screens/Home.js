import React from "react"
import { View, Text, StyleSheet, Button, Dimensions, StatusBar } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get("window");

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
        <View style={styles.cardTopContainer}>
            <Text style={styles.cardTopText}>
                Anda sudah menggunakan ganti PIN sebanyak 3 kali.
                Terus tingkatkan keamanan digital Anda dengan mengganti PIN secara berkala.
            </Text>
        </View>

        <View style={{ marginRight: 20, alignSelf: "flex-end", marginTop: 12, }}>
            <TouchableOpacity>
                <Ionicons name="ios-settings" size={30} color="black" />
            </TouchableOpacity>
        </View>

        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <TouchableOpacity background={"#0E0E52"} style={styles.changePinButton}>
                <Text style={styles.changePinButtonText}>Ganti PIN</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight + 8,
  },
  cardTopContainer: {
      backgroundColor: "#0E0E52",
      padding: 12,
      borderRadius: 8,
      elevation: 6,
      width: width - 40,
      marginHorizontal: 20
  },
  cardTopText: {
      fontFamily: "DMSans-Regular",
      color: "#fff",
      lineHeight: 24,
  },
  changePinButton: {
      borderRadius: 100,
      width: 150,
      height: 150,
      marginTop: 20,
      backgroundColor: "#0E0E52",
      justifyContent: "center",
      alignItems: "center"
  },
  changePinButtonText: {
    fontFamily: "DMSans-Regular",
    color: "#fff",
    lineHeight: 24,
},
});