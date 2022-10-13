import React from 'react'
import Nav from '../../components/Nav'
import dynamic from 'next/dynamic'

const NonSSRWrapper = props => ( 
    <React.Fragment>{props.children}</React.Fragment> 
)

const Firebase = dynamic(
    () => import('../../components/Firebase'),
    { ssr: false }
  )

function index() {

  return (
    <>
        <Nav />

        <Firebase />
    </>
  )
}

export default index