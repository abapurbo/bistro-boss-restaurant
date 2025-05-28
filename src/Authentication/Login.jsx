
import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import AuthUse from '../ShardHook/AuthUse';
import googleImg from '../assets/authenticationicon/google.png'
const Login = () => {
    const { loginUser, googleAuth } = AuthUse()
    const [disable, setDisable] = useState(true)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state || '/';
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    const captchaRef = useRef(null)
    //  google provider
    const handleGoogleAuthProvider = () => {
        googleAuth()
            .then(() => {
                navigate(from)
            })
            .catch(err=>console.log('Error',err))
    }
    //login
    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        loginUser(email, password)
            .then(() => {
              
                navigate(from)
                e.target.reset()
            })
            .catch(error => console.log("error", error))

    }

    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;

        if (validateCaptcha(user_captcha_value)) {
            setDisable(false)
        }

        else {
            setDisable(true)
        }


    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>

                </div>
                <div className="card bg-base-100 w-96 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleLogin} className="fieldset">
                            <div onClick={handleGoogleAuthProvider} className='border-1 cursor-pointer mb-5 flex flex-row justify-center items-center gap-2 p-2 rounded-xl hover:bg-blue-50 hover:rounded-3xl '>
                                <div className='flex items-center gap-2'>
                                    <img className='w-7' src={googleImg} alt="google provider" />
                                    <p className='text-xl'>Sign in with Google</p>
                                </div>
                            </div>
                            <div className='space-y-2'>
                                <label className="label text-xl font-semibold text-black">Email</label>
                                <input type="email" required className="input" name='email' placeholder="Email" />
                            </div>
                            <div className='space-y-2'>
                                <label className="label text-xl font-semibold text-black">Password</label>
                                <input type="password" required className="input" name='password' placeholder="Password" />
                            </div>
                            <div className='space-y-2'>
                                <label className="label text-xl font-semibold text-black">
                                    <LoadCanvasTemplate />

                                </label>
                                <input type="text" name='captcha' ref={captchaRef} className="input" placeholder="Type here" />
                                <button onClick={handleValidateCaptcha} className="btn btn-xs">validate Captcha</button>
                            </div>

                            <button disabled={disable} className="btn  btn-accent text-xl font-semibold mt-4">Login</button>
                            <div className='my-3'>
                                <p className='text-xl'>Now here? <Link to='/signUp'>Create a new account</Link></p>
                            </div>


                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;