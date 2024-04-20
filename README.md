# Lecture-10-11-12-ReactNative
Using MobileNet (Tensorflow AI Model) for Object Detection from Captured Images + Firebase Authentication /Storage

## TensorFlow AI Model
1. Used pretrained MobileNet model for object detection from images
2. Go to https://www.npmjs.com/search?q=tensorflow%20models to use Model of your own choice.

## Firebase Configuration
In **firebase.js** file add your firebase configuration object. The steps to obtain your object are:
1. Go to https://firebase.google.com/ and select “Get started” 
2. Create a new project ( a three-step process for creating project)
3. Select **"Add Firebase to your app"** by clicking either Android/iOS/Web/Unity/flutter
4. Add your project name and get creditional

## Method to run this project
1. Clone directory or download ZIP to extract folder
2. Use powershell or VS code terminal to goto the project directory
3. Run command "npm install" (It will install the necessary packages of package.json file)
4. Run command "npm install @tensorflow/tfjs @tensorflow-models/qna"
5. Run command "npm install @react-navigation/native @react-navigation/bottom-tabs"
6. Run command "npm install @tensorflow/tfjs @tensorflow/tfjs-react-native"
7. Run command "npx expo start"
