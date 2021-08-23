import React, { Component } from "react"
import { Link } from 'react-router-dom'

import styles from "../styles/home/footer.module.scss";
import logo from "../../assets/images/regnify-white.png"

class Footer extends Component{   

    render(){
        return(
            <div>
                <footer>
                    <div className={styles.footWrap}>
                        
                        <div className={styles.footItem}>
                            
                            <div className={styles.Item}>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
                                    </svg>
                                
                                    <h1>1Stash.</h1>
                                </span>

                                <p>
                                    A file management system for businesses & corporate organizations for employers and employees to work, collaborate, share and upload files.
                                </p>
                            </div>

                            <div className={styles.Item}>
                                <h3 className={styles.iHead}>
                                    Legal
                                </h3>

                                <ul className={styles.Flist}>
                                    <li><a href="#0">Term of use</a></li>
                                    <li><a href="#0">privacy policies</a></li>
                                </ul>
                            </div>

                             <div className={styles.Item}>
                                 <h3 className={styles.iHead}>
                                    Contact
                                </h3>

                                <ul className={styles.Flist}>
                                    <li><a href="mailto:my.onestash@gmail.com">my.stash@gmail.com</a></li>
                                </ul>
                            </div>

                            <div className={styles.Item}>
                                 <h3 className={styles.iHead}>
                                    Support
                                </h3>

                                <ul className={styles.Flist}>
                                    <li><Link to="/faq">FAQs</Link></li>
                                    <li><a href="#0">Blogs</a></li>
                                </ul>
                            </div>                           

                            <div className={styles.Item}>
                                 <h3 className={styles.iHead}>
                                    Connect with us
                                </h3>

                                <ul className={styles.Flist}>
                                    <li><a href="#0"><ion-icon name="logo-facebook"></ion-icon></a></li>
                                    <li><a href="#0"><ion-icon name="logo-twitter"></ion-icon></a></li>
                                    <li><a href="#0"><ion-icon name="logo-instagram"></ion-icon></a></li>
                                    <li><a href="#0"><ion-icon name="logo-linkedin"></ion-icon></a></li>
                                    <li><a href="#0"><ion-icon name="logo-youtube"></ion-icon></a></li>
                                </ul>
                            </div>

                        </div>

                        <div className={styles.footCopy}>
                            <p>
                                Copyright © 2021  •  All Rights Reserved
                            </p>

                            <a href="#klas">
                                Back to Top
                            </a>
                        </div>
                        
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;