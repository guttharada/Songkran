import { View, Image,Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
    const navigation = useNavigation()
  return (
    <View style={{ flex: 1, backgroundColor: "#222736" }}>
      <View style={{ flex: 1, justifyContent: "space-around" }}>
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 32,
            textAlign: "center",
          }}
        >
          Let's Get Started !
        </Text>
      </View>
      <View>
      <Image
        style={{
            width: 250,
            height: 250,
            alignSelf: 'center',
            shadowColor: 'black',
            shadowOffset: { width: 0, height: 8 },
            shadowOpacity: 0.5,
            shadowRadius: 4,
        }}
        source={require("../assets/3D_Icon.png")}
     />
    </View>
      <View style={{ flex: 1 }}>
        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Signup')}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Text style={{ color: "white", marginTop: 10, textAlign: "center" }}>
            Already have an account?
          </Text>
          <Text style={{ color: "white", marginTop: 10, marginHorizontal: 5 }}>
            |
          </Text>
          <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
            <Text
              style={{ color: "white", marginTop: 10, textAlign: "center",textDecorationLine: "underline" }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = {
  button: {
    marginTop: 150,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: "#FFD700",
    marginHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
  },
};
