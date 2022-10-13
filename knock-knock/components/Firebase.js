import React from 'react';
import Script from 'next/script';
import Link from 'next/link';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/compat/auth";
import firebase from  'firebase/compat/app';
import 'firebase/compat/firestore'
import firebaseui from 'firebaseui';
import "firebaseui/dist/firebaseui.css";

function Firebase() {

    const firebaseConfig = {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: "knock-knock-ebb39.firebaseapp.com",
      projectId: "knock-knock-ebb39",
      storageBucket: "knock-knock-ebb39.appspot.com",
      messagingSenderId: "696436060382",
      appId: "1:696436060382:web:bff156188a34baea4b924f",
      measurementId: "G-MZZQ36QLWW"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
      return (
        <>
                        
            <div>Firebase</div>
        </>
      )
    }

export default Firebase




