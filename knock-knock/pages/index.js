import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Stuff</title>
        <meta name="description" content="This is Beans" />
        <link href="/knock-knock/styles/twMain.css" rel="stylesheet" />
      </Head>

      <main className={styles.main}>
        <div className={styles.container}>
          Hello?  
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
