import React, {Component} from "react"
import { Link } from 'react-router-dom'

import styles from "../styles/home/navbar.module.scss";

import {url} from '../../config/url'
class Navbar extends Component{   

    render(){
        return(
            <div>
                <nav className={styles.navbar} id="">
                    <div className={styles.navInner}>                        
                        <div className={styles.navLogo}>
                            <Link to="/">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
                                </svg>
                                <h1>1Stash.</h1>
                            </Link>    
                        </div>
                        
                        <ul className={styles.navList}>
                            <li>
                                <Link to={url.signIn} className={styles.a}>Get started</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;