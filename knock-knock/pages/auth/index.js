import React, {useEffect} from 'react'
import Nav from '../../components/Nav'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router';
import firebase from  'firebase/compat/app';

const FirebaseLogin = dynamic(() => 
  import('../../components/Firebase'),
    { ssr: false }
  )


function index() {

  const router = useRouter()
  
  firebase.auth().onAuthStateChanged((user) => {
    if (user && typeof window !== 'undefined') {
      router.push('/')
      // ...
    }
  })
  
  return (
    <>
        <Nav />
        <FirebaseLogin />
    </>
  )
}

export default index