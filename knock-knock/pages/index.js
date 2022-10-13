import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navbar from '../components/nav';
import JokeInterface from '../components/jokeInterface';
import React, { useEffect, useState, useRef } from 'react';
import Imports from '../components/imports'
import InteractiveWindow from '../components/interactiveWindow';

export default function Home() {
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
      <Imports />
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
