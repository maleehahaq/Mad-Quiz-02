import React, { useState, useEffect } from "react";
import { View, Text, Button, TextInput, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs-react-native";

import * as qna from "@tensorflow-models/qna"; // QnA model

const colors = {
  primary: "#FFFFFF", // White
  secondary: "#DCE6E8", // Light gray
  background: "#1F2A2D", // Dark blue-gray
  text: "#0080AA", // Dark blue
  button: "#FFD027", // Yellow
  error: "#DC3545", // Red
};

const QnAClassifier = () => {
  const [answers, setAnswers] = useState([]);
  const [question, setQuestion] = useState("");
  const [passage, setPassage] = useState("");

  useEffect(() => {
    // Request camera roll permissions
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, you don't have camera roll permissions!");
        }
      }
      await tf.ready(); // Initialize TensorFlow.js
      await tf.setBackend("rn-webgl");
    })();
  }, []);

  const findAnswers = async () => {
    try {
      console.log("Finding Answers...");
      const model = await qna.load();
      console.log("Succesful Model loading...");
      const answers = await model.findAnswers(question, passage);
      setAnswers(answers);
      console.log("Answer:", answers);
    } catch (error) {
      console.error("Error finding answers:", error);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.secondary,
      }}
    >
      <TextInput
        style={{
          height: 40,
          width: 300,
          borderColor: colors.primary,
          borderWidth: 1,
          marginBottom: 10,
          color: colors.text,
          backgroundColor: colors.primary,
        }}
        onChangeText={setQuestion}
        value={question}
        placeholder="   Enter the Question!"
        placeholderTextColor={colors.text}
      />
      <TextInput
        style={{
          height: 100,
          width: 300,
          borderColor: colors.primary,
          borderWidth: 1,
          marginBottom: 10,
          color: colors.text,
          backgroundColor: colors.primary,
        }}
        onChangeText={setPassage}
        value={passage}
        placeholder="   Enter the Answer!"
        multiline
        placeholderTextColor={colors.text}
      />
      <Button
        title="Find Answers"
        onPress={findAnswers}
        color={colors.button}
      />
      {answers.map((answer, index) => (
        <Text key={index} style={{ color: colors.text }}>
          {answer.text} (Score: {answer.score.toFixed(3)})
        </Text>
      ))}
    </View>
  );
};

export default QnAClassifier;
