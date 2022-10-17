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
  const router = useRouter();

  var uiConfig = {
    signInSuccessUrl: '/',
    signInOptions: [
      // this isn't currently working firebase.auth.GoogleAuthProvider.PROVIDER_ID,
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
  useEffect(() => {
    let ui = firebaseui.auth.AuthUI.getInstance();
    if (!ui) {
      ui = new firebaseui.auth.AuthUI(firebase.auth());
    }
    ui.start('#firebaseui-auth-container', uiConfig);
// eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  firebase.auth().onAuthStateChanged((user) => {
    if (user && typeof window !== 'undefined') {
      router.push('/')
      // ...
    } else {
      router.push('/auth')
    }
  });

  return (
    <>            
      <div id='firebaseui-auth-container' className='my-16'></div>
    </>
  )
}


export default Firebase




