import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBMdy7TTLsbkjK6xC7dw8_K3Fd9Kg66T8c",
  authDomain: "fileshare-81e3a.firebaseapp.com",
  databaseURL: "https://fileshare-81e3a-default-rtdb.firebaseio.com",
  projectId: "fileshare-81e3a",
  storageBucket: "fileshare-81e3a.appspot.com",
  messagingSenderId: "754825857956",
  appId: "1:754825857956:web:e955d3ad853673ca1a0f31",
  measurementId: "G-DK5T7LHB0H",
});

export const auth = app.auth();
export default app;
