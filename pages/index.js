import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Button from 'react-bootstrap/Button';
import CollapsibleNavbar from '../components/Navbar';

import useAuth from '../src/hooks/AuthProvider';
import Link from 'next/link';

export default function Home() {
  const {login, logout, user } = useAuth();
  console.log("updated npm react-bootstrap")

  return user === null ?(
    <div className={styles.container}>
      <Head>
        <title>Job Management</title>
        <meta name="description" content="Assign jobs. View Jobs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CollapsibleNavbar />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome
        </h1>
        <Button onClick={ login } variant="primary">Sign In</Button>{' '}
        <p className={styles.description}>
          Get started by editing{' '}
        </p>
        <Link href="work_locations">Work Locations</Link>

        {/* <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  ):(
    <>
    <Button onClick={ logout } variant="primary">Sign Out</Button>{' '}
    </>
    
  )
}
