import React, { Component } from "react";
import { Link } from "react-router-dom";
import {url} from '../../config/url'
import InputField from '../../components/inputField';
import Buttona from '../../components/buttona';

import styles from "../../styles/dashboard/home.module.scss";


class AdminHome extends Component{
    
/*   constructor (props){
        super(props)

        let user = JSON.parse(localStorage.user)
        this.state = {
            file_name: '',            
            file_image: '',
            user: user,
            isLoading: false
        }
    }

    async upload(){
        if(this.state.isLoading === true){
            return
        }
        if(this.state.file_name.trim()==='' || this.state.file_image.trim()===''){
            return e("Please, ensure you have filled in all fields")
        }
        else{
            this.setState({
                isLoading : true
            })

            const dataObj = new FormData()
            dataObj.append('file_name', this.state.file_name)
            dataObj.append('file_image', this.state.file_image)
            dataObj.append('user_id', this.state.user.id)
            
            const res = await callApi('post', apiConfigs.apiUrl+'class/create.php', dataObj)
            if(res.status===201){
                this.setState({
                    dats: res.data.result
                })

                 if(this.state.dats){
                    let text = document.getElementById('copySection')
                    var range = document.createRange();
                    range.selectNode(text);
                    window.getSelection().removeAllRanges();
                    window.getSelection().addRange(range);
                    
                    navigator.clipboard.writeText(window.getSelection())
                    
                    s(res.data.message + ' The Invitation details have been copied to your clipboard')
                    this.props.history.push('/all-classes')
                }
            }
            else{
                swr(res.data.message)
            }

            this.setState({
                isLoading : false
            })
        }
    }

    setImg(e){
        this.setState({
            file_image: e.target.files[0]
        })
    }
    modelOther(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    model(e){
        this.setState({
            [e.name]: e.text
        })
    }*/

    render(){
        return(
            <div>
                    <div className="content-container">
                    <div className="content">

                        <div className={styles.wrapper}>
                            <div className={styles.upload}>
                                <div className={styles.head}>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
                                    </svg>

                                    <div className={styles.opt}>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                            </svg>
                                        </span>

                                        <Link to={url.signUp}>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>

                                <div className={styles.welcome}>
                                    <h6>Tips: Drag or drop a file in your stash 📁.</h6>
                                </div>

                                <form className={styles.up}>
                                    <InputField type="text" name="file_name" placeholder="File name" placeinside="File name" />

                                    <div className={styles.imageUp}>
                                        <label>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#6C7884">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                                        </svg>
                                        
                                        <input type="file" name="file_image" className={styles.file} />
                                        </label>
                                    </div>
                                    
                                    <Buttona text="UPLOAD"/>
                                </form>

                                
                            </div>
                            
                            <div className={styles.download}>
                                <div className={styles.head}>
                                    <h3>Hi Omopariola.</h3>

                                    <span className={styles.a}>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                        </svg>
                                    </span>
                                </div>

                                <div className={styles.info}>
                                    <div className={styles.wrap_i}>
                                        <div className={styles.i}>
                                            <div className={styles.icon}>
                                                <span>12</span>
                                            </div>

                                            <div className={styles.desc}>
                                                <span>View all users <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                                </svg>
                                                </span>
                                            </div>
                                        </div>

                                        <div className={styles.i}>
                                            <div className={styles.icon}>
                                                <span>12</span>
                                            </div>

                                            <div className={styles.desc}>
                                                <span>Files in your stash</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.stash}>
                                    <div className={styles.folder}>
                                        <h3>
                                            Stash 1.
                                        </h3>
                                        
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                                            </svg>
                                        </span>
                                    </div>
                                    <div className={styles.folder}>
                                        <h3>
                                            Stash 1.
                                        </h3>
                                        
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                                            </svg>
                                        </span>
                                    </div>
                                    <div className={styles.folder}>
                                        <h3>
                                            Stash 1.
                                        </h3>
                                        
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                                            </svg>
                                        </span>
                                    </div>
                                    <div className={styles.folder}>
                                        <h3>
                                            Stash 1.
                                        </h3>
                                        
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>  
                            
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminHome;