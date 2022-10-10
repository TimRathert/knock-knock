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
      </Head>
      <Navbar />  
      <main className=''>
        <div className={styles.container}>
          Hello?  
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
