import React, {Component} from 'react'
import styles from './styles/inputField.module.scss'

class InputField extends Component{
    model(e){
        let text = e.target.value
        if(text.trim() !== ""){
            e.target.nextElementSibling.classList.add('notEmpty')
        }
        else{
            e.target.nextElementSibling.classList = ''
        }

        if(this.props.inputValue){
            this.props.inputValue({
                text: text,
                name: e.target.name 
            })
        }
    }

    hide(e){
        let p1 = e.target.parentNode
        let p2 = p1.parentNode
        let p3 = p2.parentNode
        let inp = ''
        if(p1.nodeName==='svg'){
            inp = p3.firstChild
            inp.setAttribute('type', 'password')
            p1.style.display = "none"
            p1.previousElementSibling.style.display = "block"
        }
        else if(p1.nodeName==='DIV'){
            inp = p2.firstChild
            inp.setAttribute('type', 'password')
            e.target.style.display = "none"
            e.target.previousElementSibling.style.display = "block"
        }

    }

    show(e){
        let p1 = e.target.parentNode
        let p2 = p1.parentNode
        let p3 = p2.parentNode
        let inp = ''
        if(p1.nodeName==='svg'){
            inp = p3.firstChild
            inp.setAttribute('type', 'text')
            p1.style.display = "none"
            p1.nextElementSibling.style.display = "block"
        }
        else if(p1.nodeName==='DIV'){
            inp = p2.firstChild
            inp.setAttribute('type', 'text')
            e.target.style.display = "none"
            e.target.nextElementSibling.style.display = "block"
        }
    }

    render(){
        return(
            <div>
                {
                    this.props.type==='password' 
                    
                    ?  
                    <section className={styles.inputContainer}>                            
                        <div className={styles.input_content}>
                            <input type={this.props.type} name={this.props.name} placeholder={this.props.placeholder} onChange={(e) => this.model(e)} />
                            <label>{this.props.placeinside}</label>
                        </div>

                        <div className={styles.hideShow}>
                            <svg onClick={(e) => this.show(e)} className={styles.show} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.882 18.2971C15.1232 19.4126 13.0828 20.0034 11 20.0001C5.60803 20.0001 1.12203 16.1201 0.18103 11.0001C0.61106 8.67078 1.78266 6.54296 3.52103 4.93407L0.39203 1.80807L1.80703 0.393066L21.606 20.1931L20.191 21.6071L16.881 18.2971H16.882ZM4.93503 6.35007C3.57604 7.58566 2.62935 9.20885 2.22303 11.0001C2.53532 12.3665 3.16229 13.6412 4.05403 14.7227C4.94577 15.8041 6.07766 16.6625 7.35958 17.2294C8.64151 17.7963 10.0381 18.0561 11.4381 17.9882C12.8382 17.9203 14.203 17.5264 15.424 16.8381L13.396 14.8101C12.5327 15.3539 11.5102 15.5882 10.4963 15.4745C9.48231 15.3608 8.53707 14.906 7.8156 14.1845C7.09413 13.463 6.63926 12.5178 6.52559 11.5038C6.41193 10.4899 6.64621 9.46738 7.19003 8.60407L4.93503 6.35007ZM11.914 13.3281L8.67203 10.0861C8.49409 10.539 8.45222 11.034 8.55154 11.5104C8.65085 11.9868 8.88705 12.4238 9.23115 12.7679C9.57525 13.1121 10.0123 13.3482 10.4887 13.4476C10.9651 13.5469 11.4601 13.505 11.913 13.3271L11.914 13.3281ZM19.807 15.5921L18.376 14.1621C19.0445 13.2094 19.5204 12.1353 19.777 11.0001C19.5053 9.80979 18.9943 8.68721 18.2752 7.70056C17.5561 6.71391 16.6438 5.88379 15.5939 5.26067C14.544 4.63755 13.3783 4.23443 12.1678 4.07583C10.9572 3.91723 9.72704 4.00645 8.55203 4.33807L6.97403 2.76007C8.22103 2.27007 9.58003 2.00007 11 2.00007C16.392 2.00007 20.878 5.88007 21.819 11.0001C21.5126 12.6658 20.8239 14.2376 19.807 15.5921ZM10.723 6.50807C11.3595 6.46873 11.9971 6.56513 12.5936 6.79088C13.19 7.01663 13.7316 7.36658 14.1826 7.81752C14.6335 8.26846 14.9835 8.81009 15.2092 9.40652C15.435 10.003 15.5314 10.6406 15.492 11.2771L10.722 6.50807H10.723Z" fill="#8D9091"/>
                            </svg>
                            
                            <svg onClick={(e) => this.hide(e)} className={styles.hide} width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.9999 0C16.3919 0 20.8779 3.88 21.8189 9C20.8789 14.12 16.3919 18 10.9999 18C5.60791 18 1.12191 14.12 0.180908 9C1.12091 3.88 5.60791 0 10.9999 0ZM10.9999 16C13.0394 15.9996 15.0183 15.3068 16.6128 14.0352C18.2072 12.7635 19.3228 10.9883 19.7769 9C19.3211 7.0133 18.2048 5.24 16.6105 3.97003C15.0162 2.70005 13.0382 2.00853 10.9999 2.00853C8.96161 2.00853 6.9836 2.70005 5.38928 3.97003C3.79497 5.24 2.67868 7.0133 2.22291 9C2.677 10.9883 3.79258 12.7635 5.38705 14.0352C6.98152 15.3068 8.96044 15.9996 10.9999 16ZM10.9999 13.5C9.80643 13.5 8.66184 13.0259 7.81793 12.182C6.97401 11.3381 6.49991 10.1935 6.49991 9C6.49991 7.80653 6.97401 6.66193 7.81793 5.81802C8.66184 4.97411 9.80643 4.5 10.9999 4.5C12.1934 4.5 13.338 4.97411 14.1819 5.81802C15.0258 6.66193 15.4999 7.80653 15.4999 9C15.4999 10.1935 15.0258 11.3381 14.1819 12.182C13.338 13.0259 12.1934 13.5 10.9999 13.5ZM10.9999 11.5C11.6629 11.5 12.2988 11.2366 12.7677 10.7678C13.2365 10.2989 13.4999 9.66304 13.4999 9C13.4999 8.33696 13.2365 7.70107 12.7677 7.23223C12.2988 6.76339 11.6629 6.5 10.9999 6.5C10.3369 6.5 9.70098 6.76339 9.23214 7.23223C8.7633 7.70107 8.49991 8.33696 8.49991 9C8.49991 9.66304 8.7633 10.2989 9.23214 10.7678C9.70098 11.2366 10.3369 11.5 10.9999 11.5Z" fill="#8D9091"/>
                            </svg>
                        </div>
                    </section>

                    :

                    <section className={styles.inputContainer}>
                        <div className={styles.input_content}>
                            <input value={this.props.val} name={this.props.name} type={this.props.type} placeholder={this.props.placeholder} onChange={(e) => this.model(e)}/>
                            <label>{this.props.placeinside}</label>
                        </div>
                    </section>
                }
            </div>
        )
    }
}

export default InputField;