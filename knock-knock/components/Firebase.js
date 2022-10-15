import React, { useEffect } from 'react';
import Script from 'next/script';
import Link from 'next/link';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from  'firebase/compat/app';
import 'firebase/analytics';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css'
import { useRouter } from 'next/router';


function Firebase() {


  // const userLocal = JSON.parse(localStorage.getItem('user'));
  //   if(userLocal){
  //     localStorage.removeItem('user')
  //     router = useRouter()
  //     router.push('/auth');

  //   }
    const firebaseConfig = {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: "knock-knock-ebb39.firebaseapp.com",
      projectId: "knock-knock-ebb39",
      storageBucket: "knock-knock-ebb39.appspot.com",
      messagingSenderId: "696436060382",
      appId: process.env.APPID,
      measurementId: "G-MZZQ36QLWW"
    };
    const app = firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth()
    const db = firebase.firestore()
    
    var uiConfig = {
      signInSuccessUrl: '/',
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
      ],
      // tosUrl and privacyPolicyUrl accept either url string or a callback
      // function.
      // Terms of service url/callback.
      tosUrl: '<your-tos-url>',
      // Privacy policy url/callback.
      privacyPolicyUrl: function() {
        window.location.assign('<your-privacy-policy-url>');
      }
    };
    
    // Initialize Firebase
  
    let ui = firebaseui.auth.AuthUI.getInstance();
    if (!ui) {
      ui = new firebaseui.auth.AuthUI(firebase.auth());
    }
    ui.start('#firebaseui-auth-container', uiConfig);

    firebase.auth().onAuthStateChanged(user=>{
      if (user) {
          // store the user on local storage
          sessionStorage.setItem('user', true);
      } else {
          // removes the user from local storage on logOut
          sessionStorage.removeItem('user');
      }
  })

      return (
        <>            
          <div id='firebaseui-auth-container'></div>
        </>
      )
    }


export default Firebase




