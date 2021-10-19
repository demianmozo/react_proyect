import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBXAqS_a4lFXTdQOE4eb_ylBN8fH0CFNsY",
    authDomain: "sasbakery-ecommerce.firebaseapp.com",
    projectId: "sasbakery-ecommerce",
    storageBucket: "sasbakery-ecommerce.appspot.com",
    messagingSenderId: "1073186112382",
    appId: "1:1073186112382:web:52b6deb88f48355de0692f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;