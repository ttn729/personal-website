import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className={styles.container}>
      
      <Head>
        <title>Projects</title>
        <meta name="description" content="Thomas Nguyen personal page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://personal-website-green-nine.vercel.app/">Thomas Nguyen</a>
        </h1>

        <div className={styles.grid}>
          <a href="https://spicy-chess-colors.netlify.app/" className={styles.card}>
            <h2>Chess Colors &rarr;</h2>
            <p>Train your board vision with by identifying the color of a random chess square.</p>
          </a>
          <a href="https://game-of-chance.vercel.app/" className={styles.card}>
            <h2>A Game of Chance &rarr;</h2>
            <p>Maximize points by guessing if a number Y is higher or lower than a number X.</p>
          </a>
          <a href="https://diffchecker-alpha.vercel.app/" className={styles.card}>
            <h2>Difference Checker &rarr;</h2>
            <p>Given two input text boxes, return their similiarity as a percentage.</p>
          </a>
          <a href="https://masoi.vercel.app/" className={styles.card}>
            <h2>Ma Sói Helper &rarr;</h2>
            <p>Randomize player names and roles.</p>
          </a>
          <a href="https://spicy-chat.herokuapp.com/" className={styles.card}>
            <h2>Chat Rooms &rarr;</h2>
            <p>A free group web chat service.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://personal-website-green-nine.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          © Thomas Nguyen 2022
        </a>
      </footer>
    </div>
  )
}
