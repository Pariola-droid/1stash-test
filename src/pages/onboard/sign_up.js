import React, { useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { url } from '../../config'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form'


import { registerUser, setLoading, clearMsg } from '../../actions/authActions'

import check from "../../assets/images/check.svg";

import styles from "../../styles/onboard/sign_up.module.scss";



const SignUp = ({
	registerUser,
	setLoading,
	loading,
	error_msg,
	success_msg,
	clearMsg,
	userToken,
}) => {
	useEffect(() => {
		clearMsg()
	}, [])
	const { register, handleSubmit, errors, reset } = useForm()
	// submit function
	// console.log(window.btoa('ipariol@yahoo.com'))
	const onSubmit = (data) => {
		setLoading()
        const userData = {
            first_name: data.first_name,
            last_name: data.last_name,
			email: data.email,			
			job_role: data.job_role,
			password: data.password,
		}
		// console.log(url.liveVerifyEmail)
		registerUser(userData, reset)
	}
	if (userToken !== null) {
		//'/username/dashboard/home'
		return <Redirect to={url.signIn} />
	}

	return (
		<div>
			<section className={styles.sign_in}>
                <div className={styles.info}>
                    <div className={styles.info_nav}>
                        <Link to="/">back</Link>
                    </div>
                    <div className={styles.info_content}>
                        <div className={styles.head}>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
                            </svg>
                            <h6>1Stash</h6>
                            <p>free</p>
                        </div>

                        <div className={styles.features}>
                            <img src={check} alt="" />
                            <div className={styles.text}>
                                <h3>Multipurpose</h3>
                                <p>Made for every employer and employee. In between Microsoft 365.</p>
                            </div>
                        </div>

                        <div className={styles.features}>
                            <img src={check} alt="" />
                            <div className={styles.text}>
                                <h3>Agile feature</h3>
                                <p>Made for teams to work, share and collaborate.</p>
                            </div>
                        </div>

                        <div className={styles.features}>
                            <img src={check} alt="" />
                            <div className={styles.text}>
                                <h3>Your stash</h3>
                                <p>Cool grid arrangement of every of your uploaded files. </p>
                            </div>
                        </div>

                        <div className={styles.features}>
                            <img src={check} alt="" />
                            <div className={styles.text}>
                                <h3>Free tool</h3>
                                <p>Made with love from 1stash, free and easy to use.</p>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className={styles.form}>
                    <div className={styles.form_nav}>
                        <Link to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
                            </svg>
                        </Link>                        

                        <Link to={url.signIn}>
                            Login
                        </Link>
                    </div>

                    <h5 className={styles.h5}>
                        Yay! you came back.
                    </h5>

                    <form
                        method='post'
						onSubmit={handleSubmit(onSubmit)}
                        className={styles.form_ic}>

                        <div className={styles.inputContainer}>                            
                            <div className={styles.input_content}>
                                <input
                                    type="text"
                                    name="first_name"
                                    placeholder="First name"
                                    ref={register({
							        required: 'First name - Required',
                                    })}
                                />
                                <label>First name</label>
                                {errors.email && (
							    <small className={styles.errorMsg}>-{errors.email.message}</small>
						        )}
                            </div>                        
                        </div>

                        <div className={styles.inputContainer}>                            
                            <div className={styles.input_content}>
                                <input
                                    type="text"
                                    name="last_name"
                                    placeholder="Last name"
                                    ref={register({
							        required: 'Last name - Required',
                                    })}
                                />
                                <label>Last name</label>
                                {errors.email && (
							    <small className={styles.errorMsg}>-{errors.email.message}</small>
						        )}
                            </div>                        
                        </div>

                        <div className={styles.inputContainer}>                            
                            <div className={styles.input_content}>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email address"
                                    ref={register({
							        required: 'Email - Required',
                                    })}
                                />
                                <label>Email address</label>
                                {errors.email && (
							    <small className={styles.errorMsg}>-{errors.email.message}</small>
						        )}
                            </div>                        
                        </div>

                        <div className={styles.inputContainer}>                            
                            <div className={styles.input_content}>
                                <input
                                    type="text"
                                    name="job_role"
                                    placeholder="Job role"
                                    ref={register({
							        required: 'Job role - Required',
                                    })}
                                />
                                <label>Job role</label>
                                {errors.email && (
							    <small className={styles.errorMsg}>-{errors.email.message}</small>
						        )}
                            </div>                        
                        </div>
                            
                        <div className={styles.inputContainer}>                            
                            <div className={styles.input_content}>
                                <input 
                                    type="password"
                                    name="password" 
                                    placeholder="Password"
                                    ref={register({
								    required: 'Password - Required',
								    minLength: { value: 6, message: 'Your Password is too Short' },
							        })} 
                                />
                                    <label>Password</label>
                                    {errors.password && (
                                    <small className={styles.errorMsg}>-{errors.password.message}</small>
                                    )}
                            </div>                        
                        </div>
                        
                        {/* Login Button */}
						{loading ? (
							<div className={styles.loader}></div>
						) : error_msg === null && success_msg === null ? (
							<button type="submit" className={styles.button}>
                                SIGN UP
                            </button>
						) : error_msg !== null ? (
							<>
							<small className={styles.errorMsg}> {error_msg} </small>
							<button type="submit" className={styles.button}>
                                    SIGN UP
                            </button>
							</>
						) : (
							<>
								<div className={styles.sendSuccess}>{success_msg}</div>
							</>
						)}
						{/*  */}                        
                        
                    </form>

                    <div className={styles.terms}>
                        <a href="#0" target="_blank" class="tiny-link">Forgot Password?</a>.
                    </div>
                </div>
            </section>
		</div>
	)
}
const mapStateToProps = (state) => ({
	loading: state.authReducer.loading,
	error_msg: state.authReducer.error_msg,
	success_msg: state.authReducer.success_msg,
	userToken: state.authReducer.userToken,
})
export default connect(mapStateToProps, { registerUser, setLoading, clearMsg })(
	SignUp
)

