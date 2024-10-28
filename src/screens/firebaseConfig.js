// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2eXnpfN0bxuKfTzsvb_Y0-v5cq_hrhVs",
  authDomain: "playlife-bf20a.firebaseapp.com",
  projectId: "playlife-bf20a",
  storageBucket: "playlife-bf20a.appspot.com",
  messagingSenderId: "882682980699",
  appId: "1:882682980699:web:5ff940cb2a37bb2d37d27e",
  measurementId: "G-12N5K11R67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics only if supported
isSupported().then(supported => {
  if (supported) {
    const analytics = getAnalytics(app);
    console.log('Firebase Analytics initialized');
  } else {
    console.log('Firebase Analytics not supported on this environment');
  }
});
