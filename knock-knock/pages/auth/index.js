import React, {useEffect} from 'react'
import Nav from '../../components/Nav'
import dynamic from 'next/dynamic'
import firebase from  'firebase/compat/app';

const FirebaseLogin = dynamic(() => 
  import('../../components/Firebase'),
    { ssr: false }
  )

function index() {

  // const router = useRouter()

  // firebase.auth().onAuthStateChanged((user) => {
  //   if (user && typeof window !== 'undefined') {
  //     router.push('/')
  //     // ...
  //   }
  // })
  
  return (
    <>
        <Nav />
        <FirebaseLogin />
        <div className='flex justify-center'>
          <a href='https://venmo.com/code?user_id=2074327587487744379' className='bg-color2 p-2 rounded-lg transition-all hover:bg-color5' target="_blank" rel="noreferrer">Buy Tim some coffee</a>
        </div>
    </>
  )
}

export default index