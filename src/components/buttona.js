import React, {Component} from 'react'
import styles from './styles/buttona.module.scss'

class Button extends Component{

    render(){
        return(
            <>
                <button className={styles.button} onClick={this.props.onClick}>
                    {   
                        this.props.isLoading === true
                        ?
                        <div className={styles.loader}></div>
                        :
                        <span>{this.props.text}</span>
                    }
                </button>
            </>
        )
    }
}

export default Button;