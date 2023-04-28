import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
// import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(" ");

  const navigation = useNavigation();

  function createUser(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function loginUser(email, password) {
    return signInWithEmailAndPassword(email, password);
  }
  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     {
  //       console.log(user);
  //     }
  //     if (user) {
  //       navigation.navigate("Home");
  //     }
  //   });
  // }, []);

  function loginPage() {
    return onAuthStateChanged((user) => {
      {
        console.log(user);
      }
      if (user) {
        navigation.navigate("HomeScreen");
      }
    });
  }

  useEffect(() => {
    return loginPage;
  }, []);

  const handleSignUp = () => {
    createUser(email, password)
      .then((userCred) => {
        const user = userCred.user;
        console.log("Registered with:", user.email);
      })
      .catch((error) => alert(error.message));
  };

  const handleLogin = () => {
    loginUser(email, password)
      .then((userCred) => {
        const user = userCred.user;
        navigation.navigate("HomeScreen");
        console.log("Logged in as:", user.email);
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
      });
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.Input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.Input}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    fontSize: 53,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "black",
  },
  inputContainer: {
    width: "80%",
  },
  Input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignContent: "center",
    marginTop: 40,
  },
  button: {
    alignItems: "center",
    backgroundColor: "yellow",
    width: "100%",
    padding: 15,
    borderRadius: 10,
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "white",
    borderWidth: 2,
  },
  buttonText: {
    color: "black",
    fontWeight: "500",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "black",
    fontWeight: "500",
    fontSize: 16,
  },
});
