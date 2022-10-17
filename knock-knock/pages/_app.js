import '../styles/globals.css'
import firebase from  'firebase/compat/app';
import 'firebase/analytics';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

function MyApp({ Component, pageProps }) {
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
  return <Component {...pageProps} />
}

export default MyApp
