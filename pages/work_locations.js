import Link from 'next/link'
import Head from "next/head";

import styles from "../styles/Home.module.css";
import wl_styles from "../styles/WorkLocations.module.css"

import CollapsibleNavbar from "../components/Navbar";

export default function WorkLocations() {
    return (
        <div className={styles.container}>
            <CollapsibleNavbar />
            <Head>
                <title>Work Locations</title>
                <meta name="description" content="Work site locations" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={wl_styles.title}>
                Work Locations
                </h1>

                <div className={wl_styles.grid}>
                    <Link href="pagham" className={wl_styles.card}><h2>Pagham</h2></Link>
                    <Link href="toddington" className={wl_styles.card}><h2>Toddington</h2></Link>
                    <Link href="donnington" className={wl_styles.card}><h2>Donnington</h2></Link>
                    <Link href="funtington" className={wl_styles.card}><h2>Funtington</h2></Link>
                    <Link href="abshot" className={wl_styles.card}><h2>Abshot</h2></Link>
                </div>

            </main>            
        </div>
        
    )
}