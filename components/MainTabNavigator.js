import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import CameraScreen from "./cameraScreen";
import ImageClassifier from "./objectDetectionScreen";
import SignOutButton from "./SignOutButton";

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Camera") {
            iconName = "camera";
          } else if (route.name === "SignOut") {
            iconName = "log-out";
          } else if (route.name === "Search") {
            iconName = "search";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#0080AA", //blue
      }}
    >
      <Tab.Screen name="Camera" component={CameraScreen} />
      <Tab.Screen name="Search" component={ImageClassifier} />
      <Tab.Screen
        name="SignOut"
        component={SignOutButton}
        options={{
          tabBarLabel: "Sign Out",
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
