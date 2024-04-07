import {
  View,
  Text,
  TextInput,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: "#222736" }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{ flex: 1, justifyContent: "flex-start", paddingLeft: 10 }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={25} color="white" />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Image
            style={{
              width: 250,
              height: 250,
              alignSelf: "center",
              shadowColor: "black",
              shadowOffset: { width: 0, height: 8 },
              shadowOpacity: 0.5,
              shadowRadius: 4,
              marginTop: -210,
            }}
            source={require("../assets/3D_Icon.png")}
          />
        </View>
      </SafeAreaView>
      <View
         style={{
          flex: 1,
          backgroundColor: "white",
          marginTop: -180,
          paddingTop: 50,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          shadowColor: 'white',
          shadowOffset: { width: 0, height: -2 }, 
          shadowOpacity: 0.25,
          shadowRadius: 4,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "start",
            marginBottom: 10,
          }}
        >
          <Text style={{ paddingLeft: 40 }}>Email Address</Text>
        </View>
        <TextInput
          placeholder="Enter your email address"
          style={{
            backgroundColor: "#f2f2f2",
            paddingHorizontal: 15,
            paddingVertical: 10,
            borderRadius: 10,
            marginBottom: 20,
            marginHorizontal: 30,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "start",
            marginBottom: 10,
          }}
        >
          <Text style={{ paddingLeft: 40 }}>Password</Text>
        </View>
        <TextInput
          placeholder="Enter your password"
          secureTextEntry={true}
          style={{
            backgroundColor: "#f2f2f2",
            paddingHorizontal: 15,
            paddingVertical: 10,
            borderRadius: 10,
            marginBottom: 5,
            marginHorizontal: 30,
          }}
        />
        <View style={{ paddingLeft: 240 }}>
          <Text>Forgot Password ?</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text
          style={{
            color: "black",
            textAlign: "center",
            fontSize: 20,
            paddingTop: 20,
            fontWeight: "bold",
          }}
        >
          Or
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            paddingTop: 20,
          }}
        >
          <TouchableOpacity>
            <Image
              source={require("../assets/img_google.png")}
              style={{ width: 55, height: 55 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../assets/img_apple.png")}
              style={{ width: 55, height: 55 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../assets/img_facebook.png")}
              style={{ width: 55, height: 55 }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Text style={{ color: "black", marginTop: 20, textAlign: "center" }}>
            Don't have an account?
          </Text>
          <Text style={{ color: "black", marginTop: 20, marginHorizontal: 5 }}>
            |
          </Text>
          <TouchableOpacity onPress={()=> navigation.navigate('Signup')}>
            <Text
              style={{ color: "#FFD700", marginTop: 20, textAlign: "center",textDecorationLine: "underline" }}
            >
              Signup
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = {
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: "#FFD700",
    marginHorizontal: 30,
    marginTop: 15,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
  },
};
