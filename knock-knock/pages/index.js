import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Nav';
import JokeInterface from '../components/JokeInterface';
import React, { useEffect, useState, useRef, useContext, createContext } from 'react';
import InteractiveWindow from '../components/InteractiveWindow';
import firebase from  'firebase/app';
import 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import 'firebase/compat/firestore';


export default function Home() {

  const router = useRouter();
  
  useEffect(() => {
    if(firebase == undefined){
      router.push('/auth');
    }
  },[])

  


  const [ setup, setSetup ] = useState('')
  const [ jokeState, setJokeState ] = useState('init')
  const chatWindow = useRef(null)
  // joke states: init, setup, punchline, writeNew (optional), end
  //console.log(jokeState)
  return (
    <div>
      <Head>
        <title>Knock Knock</title>
        <meta name="Knock Knock joke completion database achieved using basic machine learning api calls" content="knock knock" />
      </Head>
      <Navbar />  
      <main className='flex flex-wrap w-screen justify-around'>
        <InteractiveWindow chatWindow = { chatWindow } jokeState = { jokeState }/>
        <JokeInterface 
          setup = {setup} 
          setSetup = {setSetup} 
          jokeState = { jokeState } 
          setJokeState = { setJokeState }
          chatWindow = { chatWindow }
        />
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
