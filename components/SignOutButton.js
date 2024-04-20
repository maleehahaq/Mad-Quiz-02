import React from "react";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../firebase";

const SignOutButton = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: "SignIn" }],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return <Button title="Sign Out" onPress={handleSignOut} color="#FFD027" />;
};

export default SignOutButton;
