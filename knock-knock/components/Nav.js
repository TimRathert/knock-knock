import React, { forwardRef, Fragment, useState, useEffect } from 'react'
import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import firebase from  'firebase/compat/app';
import 'firebase/analytics';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { Button } from 'react-scroll';


function Nav() {
  
  const router = useRouter()
  const [ show, setShow ] = useState(true);
  const [ lastScrollY, setLastScrollY ] = useState(0); 
  

  const MyLink = forwardRef((props, ref) => {
    MyLink.displayName = 'MyLink'
    let { href, children, ...rest } = props
    return (
      <Link href={href}>
        <a ref={ref} {...rest}>
          {children}
        </a>
      </Link>
    )
  })

  // add conditional list for auth status
  const links = [
    { href: ' ', label: 'Account' },
    { href: '  ', label: 'Support' },
    { href: '   ', label: 'License' },
  ]


  const NavVis = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY){
        setShow(false);
      }
      else{ setShow(true); }
    }
    setLastScrollY(window.scrollY)
  };

 

  useEffect(() => {
    if (typeof window !== undefined){
      window.addEventListener('scroll', NavVis);
      return () => {
        window.removeEventListener('scroll', NavVis);
      }
    }
  }
// eslint-disable-next-line react-hooks/exhaustive-deps
  ,[lastScrollY]);

  

  useEffect(() => {
    const userLocal = firebase.auth().currentUser;
    if(userLocal == null){
      router.push('/auth');
    }
    else{router.push('/')}
// eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  firebase.auth().onAuthStateChanged((user) => {
    if (user && typeof window !== 'undefined') {
      router.push('/')
      // ...
    }
  })

//console.log(firebase.auth().currentUser)

  return (
    <div className={`
    navbar
    flex
    flex-row
    justify-between 
    bg-gradient-to-r 
    from-color1 
    to-color2
    w-screen
    h-12 
    items-center
    transition-all
    sticky
    motion-reduce:transition-none motion-reduce:hover:transform-none
    ${show ? 'top-0' : '' }
    `}
    > <span className={`select-none px-8 py-2 text-xl font-light tracking-widest`}><Link href='/'>knock</Link></span>
      <Menu as="div" className="relative transition-opacity hover:bg-color5/10 rounded-md">
        <Menu.Button className="px-8 py-2 rounded-full text-white">Menu</Menu.Button>
        <Transition
                enter="transition duration-200 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-150 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
                >
          <Menu.Items className={`absolute bg-color2 p-4 rounded-md flex flex-col w-24 shadow-inner shadow-color1`}>
            {links.map((link) => (
            /* Use the `active` state to conditionally style the active item. */
            <Menu.Item key={link.href}>
              {({ active }) => (
                <MyLink
                  href={link.href}
                  className='gap-1 hover:bg-medaquamarine/10 rounded-md'
                >
                  {link.label}
                </MyLink>
              )}
            </Menu.Item>
          ))}

           <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => {
                    firebase.auth().signOut().then(function() {
                    router.push('/auth')})
                  }}

                >
                  Sign Out
                </button>
              )}
            </Menu.Item> 

          </Menu.Items>
        </Transition>
      </Menu>
    </div>
// firebase.auth().signOut().then(function() {
//      router.push('/auth') 
  )
}

export default Nav