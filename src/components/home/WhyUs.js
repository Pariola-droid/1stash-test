import React, { Component } from "react"
// import { Link } from 'react-router-dom'

import styles from "../styles/home/why_us.module.scss";

import world from "../../assets/images/world-class.svg"
import rocket from "../../assets/images/rocket.svg"
import scale from "../../assets/images/scale.svg"
import verified from "../../assets/images/verified.svg"

class WhyUs extends Component{   

    render(){
        return(
            <div>
                <section className={styles.why_us}>
                        <div className={styles.wrapper}>
                            <div className={styles._tag}>
                                features
                            </div>

                            <div className={styles.why_content}>
                                <div className={styles.title}>
                                    Curious about what 1stash is all about?
                                </div>

                                <div className={styles.desc}>
                                    A file management system for businesses & corporate organizations for employers and employees to collaborate, share and upload files.
                                </div>
                            </div>
                            
                            <div className={styles.why_items}>
                                <div className={styles.why_box}>
                                    <div className={styles._item}>
                                        <div className={styles.icon}>
                                            <img src={world} alt=""/>
                                        </div>

                                        <div className={ styles._iContent}>
                                            <div className={styles.title}>
                                                Multipurpose
                                            </div>
                                            <div className={styles.desc}>
                                                1Stash can be used by any employer or employee in a business or corporate organization.
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles._item}>
                                        <div className={styles.icon}>
                                            <img src={rocket} alt=""/>
                                        </div>

                                        <div className={ styles._iContent}>
                                            <div className={styles.title}>
                                                Agile feature
                                            </div>
                                            <div className={styles.desc}>
                                               1Stash gives full access to employers or employees to collaborate on office files or sensitive documents.
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.why_box}>
                                    <div className={styles._item}>
                                        <div className={styles.icon}>
                                            <img src={scale} alt=""/>
                                        </div>

                                        <div className={ styles._iContent}>
                                            <div className={styles.title}>
                                                Your stash
                                            </div>
                                            <div className={styles.desc}>
                                                1Stash gives a cool grid arrangement of every of your uploaded files in your stash.
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className={styles._item}>
                                        <div className={styles.icon}>
                                            <img src={verified} alt=""/>
                                        </div>

                                        <div className={ styles._iContent}>
                                            <div className={styles.title}>
                                                Free tool
                                            </div>
                                            <div className={styles.desc}>
                                                1Stash is free and easy to use,work, collaborate, share and upload files - In between Microsoft 365.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </section>
            </div>
        );
    }
}

export default WhyUs;