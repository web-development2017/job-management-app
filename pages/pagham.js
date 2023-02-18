import Head from "next/head"
import CollapsibleNavbar from "../components/Navbar"
import Link from "next/link"
import styles from "../styles/Home.module.css";
import wl_styles from "../styles/WorkLocations.module.css"
import pag_styles from "../styles/Pagham.module.css"


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
                <h1 className={pag_styles.title}>
                Pagham
                </h1>

                {/* <table className={`${pag_styles.table} table`}>
                    <thead>
                        <tr>
                            <th scope="col">Number of homes</th>
                            <th scope="col">Number of empty homes</th>
                            <th scope="col">Number of homes that need work</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>20</td>
                            <td>18</td>
                            <td>10</td> 
                        </tr>
                    </tbody>
                </table>              */}
                <div className="row">
                    <div className="col-sm-6 mb-3">
                        <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Homes</h5>
                            <p className="card-text">Click the button below to see a list of all home.</p>
                            <Link href="#" className="btn btn-primary">Click here</Link>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-6 mb-3">
                        <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Outstanding work</h5>
                            <p className="card-text">Click below for a job sheet of all outstanding work</p>
                            <a href="#" className="btn btn-primary">Click here</a>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-6 mb-3">
                        <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Empty homes</h5>
                            <p className="card-text">Click below to see a list of all empty homes</p>
                            <a href="#" className="btn btn-primary">Click here</a>
                        </div>
                        </div>
                    </div>
                </div>

                <div className={wl_styles.grid}>
                    <Link href="home_1" className={wl_styles.card}><h2>No 1</h2></Link>
                    <Link href="home_2" className={wl_styles.card}><h2>No 2</h2></Link>
                    <Link href="home_3" className={wl_styles.card}><h2>No 3</h2></Link>
                    <Link href="home_4" className={wl_styles.card}><h2>No 4</h2></Link>
                    <Link href="home_5" className={wl_styles.card}><h2>No 5</h2></Link>
                </div>
            </main>            
        </div>
    )
}