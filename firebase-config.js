// c:/Dont touch - Copy/snekin shesham/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, where, updateDoc, doc, setDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

// ⭐ PASTE YOUR FIREBASE CONFIGURATION HERE ⭐
const firebaseConfig = {
    apiKey: "AIzaSyA9EXiqqbhQzhsPitZo9zcU2CMf27newG0",
    authDomain: "guester-mini-project.firebaseapp.com",
    projectId: "guester-mini-project",
    storageBucket: "guester-mini-project.firebasestorage.app",
    messagingSenderId: "599268595821",
    appId: "1:599268595821:web:d0d1273e8cab5f7aec0764",
    measurementId: "G-FV4JFPLPTH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs, query, where, updateDoc, doc, setDoc, serverTimestamp };
