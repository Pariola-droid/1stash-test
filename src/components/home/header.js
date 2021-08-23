import React, { Component } from "react"
// import { Link } from 'react-router-dom'

import styles from "../styles/home/header.module.scss";


class Header extends Component{   

    render(){
        return(
            <div>
                <header className={styles.header}>
                    <div className={styles.wrapper}>
                        <div className={styles.content}>
                            <div className={styles.title}>
                                We're glad to have you check out what 1stash is all about.
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;