import '../styles/globals.css'
import Script from 'next/script'


function MyApp({ Component, pageProps }) {
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
 

  return (
      <Component {...pageProps} />
  )
}

export default MyApp
