import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className={styles.container}>
      
      <Head>
        <title>About -- Thomas Nguyen</title>
        <meta name="description" content="Thomas Nguyen personal page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="http://localhost:3000">Thomas Nguyen</a>
        </h1>

        <div className={styles.grid}>
          <a href="https://spicy-chess-colors.netlify.app/" className={styles.card}>
            <h2>Chess Colors &rarr;</h2>
            <p>Train your board vision with chess colors.</p>
          </a>
          <a href="https://spicy-chess-colors.netlify.app/" className={styles.card}>
            <h2>Chess Colors &rarr;</h2>
            <p>Train your board vision with chess colors.</p>
          </a>
          <a href="https://spicy-chess-colors.netlify.app/" className={styles.card}>
            <h2>Chess Colors &rarr;</h2>
            <p>Train your board vision with chess colors.</p>
          </a>
          <a href="https://spicy-chess-colors.netlify.app/" className={styles.card}>
            <h2>Chess Colors &rarr;</h2>
            <p>Train your board vision with chess colors.</p>
          </a>
          <a href="https://spicy-chess-colors.netlify.app/" className={styles.card}>
            <h2>Chess Colors &rarr;</h2>
            <p>Train your board vision with chess colors.</p>
          </a>
          <a href="https://spicy-chess-colors.netlify.app/" className={styles.card}>
            <h2>Chess Colors &rarr;</h2>
            <p>Train your board vision with chess colors.</p>
          </a>
          <a href="https://spicy-chess-colors.netlify.app/" className={styles.card}>
            <h2>Chess Colors &rarr;</h2>
            <p>Train your board vision with chess colors.</p>
          </a>
          <a href="https://spicy-chess-colors.netlify.app/" className={styles.card}>
            <h2>Chess Colors &rarr;</h2>
            <p>Train your board vision with chess colors.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          © Thomas Nguyen 2022
        </a>
      </footer>
    </div>
  )
}
