// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD9gkbkXyBdC67e2UmBVyJE1dSUZ17_Rl4",
  authDomain: "quiz02-92591.firebaseapp.com",
  projectId: "quiz02-92591",
  storageBucket: "quiz02-92591.appspot.com",
  messagingSenderId: "917913595741",
  appId: "1:917913595741:web:5d47cb8c90015bbb6142b4",
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// export const auth = getAuth(firebaseApp);
export const auth = initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

// change the rules of Storage as follows:

// service firebase.storage {
//   match /b/{bucket}/o {
//     match /{allPaths=**} {
//       allow read, write: if true;
//     }
//   }
// }
