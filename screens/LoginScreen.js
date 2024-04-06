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
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "start",
            marginBottom: 10,
          }}
        >
          <Text style={{paddingLeft: 40}}>Email Address</Text>
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
        <View style={{
            flexDirection: "row",
            justifyContent: "start",
            marginBottom: 10,
          }}>
        <Text style={{paddingLeft: 40}}>Password</Text>
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
        <View style={{paddingLeft: 240}}>
            <Text>
                Forgot Password ?
            </Text>
        </View>
         <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
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