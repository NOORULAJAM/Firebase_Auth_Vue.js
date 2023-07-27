import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase";
import "bootstrap/dist/css/bootstrap.min.css";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYoQc7QbPp3ZrEGK5tPH9FYXTnuBY5mgA",
  authDomain: "fir-auth-e959e.firebaseapp.com",
  projectId: "fir-auth-e959e",
  storageBucket: "fir-auth-e959e.appspot.com",
  messagingSenderId: "722390677557",
  appId: "1:722390677557:web:11a4f20758db607bc6197c",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount("#app");
