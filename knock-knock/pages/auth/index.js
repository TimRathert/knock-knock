import React from 'react'
import Nav from '../../components/Nav'
import dynamic from 'next/dynamic'



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