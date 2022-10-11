import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/nav'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Knock Knock</title>
        <meta name="description" content="This is Beans" />
        <link href="/knock-knock/styles/twMain.css" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap" rel="stylesheet"></link>
      </Head>
      <Navbar />  
      <main className='flex flex-wrap w-screen justify-around'>


    
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
