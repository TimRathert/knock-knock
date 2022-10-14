import React from 'react'
import Nav from '../../components/Nav'
import dynamic from 'next/dynamic'



const DynamicComponent = dynamic(() => 
  import('../../components/Firebase'),
    { ssr: false }
  )

function index() {

  return (
    <>
        <Nav />
        <DynamicComponent />
    </>
  )
}

export default index