// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvgRGsg5v9OezUOoT6McRw0H8EOOFsiYo",
  authDomain: "my-first-firebas-project-af182.firebaseapp.com",
  projectId: "my-first-firebas-project-af182",
  storageBucket: "my-first-firebas-project-af182.appspot.com",
  messagingSenderId: "426259814354",
  appId: "1:426259814354:web:453123f71eff6698e55a0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
//Export the reference to be used in other files
export const db = getFirestore(app);

/**const firebaseConfig = {
  apiKey: "*********************************",
  authDomain: "*******************************",
  projectId: "***********************",
  storageBucket: "******************************",
  messagingSenderId: "******************",
  appId: "************************"
}; */