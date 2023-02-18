import Head from "next/head"
import CollapsibleNavbar from "../components/Navbar"
import Link from "next/link"
import styles from "../styles/Home.module.css";


export default function Pagham(){
    return(
        <div className={styles.container}>
            <CollapsibleNavbar />
            <Head>
                <title>Pagham</title>
                <meta name="description" content="Work site in Pagham" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                Pagham
                </h1>                

                <div className={styles.grid}>
                <Link href="home_1" className={styles.card}>No 1</Link>
                <Link href="home_2" className={styles.card}>No 2</Link>
                <Link href="home_3" className={styles.card}>No 3</Link>
                <Link href="home_4" className={styles.card}>No 4</Link>
                <Link href="home_5" className={styles.card}>No 5</Link>
            </div>
            </main>            
        </div>
    )
}