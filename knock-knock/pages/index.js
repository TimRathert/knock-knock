import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navbar from '../components/nav';
import JokeInterface from '../components/jokeInterface';
import React, { usaeEffect, useState } from 'react';
import Imports from '../components/imports'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Knock Knock</title>
        <meta name="description" content="knock knock" />
      <Imports />
      </Head>
      <Navbar />  
      <main className='flex flex-wrap w-screen justify-around'>
        <JokeInterface />
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
