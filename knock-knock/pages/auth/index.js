import React, {useEffect} from 'react'
import Nav from '../../components/Nav'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router';

const FirebaseLogin = dynamic(() => 
  import('../../components/Firebase'),
    { ssr: false }
  )


function index() {
  
  return (
    <>
        <Nav />
        <FirebaseLogin />
    </>
  )
}

export default index