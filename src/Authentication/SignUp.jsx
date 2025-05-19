import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import google from '../assets/authenticationicon/google.png'
import facebook from '../assets/authenticationicon/facebook.png'
import github from '../assets/authenticationicon/github.png'
import { Context } from '../AuthContext/AuthContext';
import Swal from 'sweetalert2';
import useAxiosPublic from './../hook/useAxiosPublic';
const SignUp = () => {
    const { createUser, updateUser, googleAuth, facebookAuth, githubAuth } = useContext(Context)
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    // const form=
    const { register, handleSubmit, reset, formState: { errors }, } = useForm()
    const handleGoogleAuthProvider = () => {
        googleAuth()
            .then(result => {
                console.log(result.user)
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => console.log(res.data))

                navigate('/')
            })

    }
    const onSubmit = data => {

        createUser(data.email, data.password)
            .then(result => {
                const userProfile = {
                    displayName: data.name,
                    photoURL: data.photo,
                }
                updateUser(userProfile)

                const userInfo = {
                    name: data.name,
                    email: data.email
                }

                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log('hello', res.data)
                    })
                    .catch(error => console.log('error', error))
                reset()
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "User created successfully",
                    showConfirmButton: false,
                    timer: 1500
                })
                //   navigate('/')
            })
            .catch(error => console.log("error", error))
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl font-bold">Sign Up now!</h1>

                </div>
                <div className="card bg-base-100 w-86 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)} className="fieldset">
                            <div className='space-y-1'>
                                <label className="label text-xl font-semibold text-black">Name</label>
                                <input type="text" defaultValue="test" {...register("name", { required: true, minLength: 6, maxLength: 16 })} className="input" placeholder="User Name" />
                                {errors.name && <span className='text-red-700 text-xs font-semibold'>This field is required</span>}
                            </div>
                            <div className='space-y-1'>
                                <label className="label text-xl font-semibold text-black">Photo URL</label>
                                <input type="url" defaultValue="test"{...register("photo")} className="input" placeholder="Photo URL" />
                            </div>
                            <div className='space-y-1'>
                                <label className="label text-xl font-semibold text-black">Email</label>
                                <input type="email" defaultValue="test" {...register("email", { required: true })} className="input" placeholder="Email" />
                                {errors.email && <span className='text-red-700 text-xs font-semibold'>Email is required</span>}
                            </div>
                            <div className='space-y-1'>
                                <label className="label text-xl font-semibold text-black">Password</label>
                                <input type="password" defaultValue="test" {...register("password", { required: true, minLength: 6, maxLength: 16, pattern: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* )/ })} className="input" placeholder="Password" />
                                {errors.password && <span className='text-red-700 text-xs font-semibold'>Password is required</span>}
                                {errors.password?.type === "minLength" && <span className='text-red-700 text-xs font-semibold'>Must be 6 character is required</span>}
                                {errors.password?.type === "maxLength" && <span className='text-red-700 text-xs font-semibold'>You are over 16 character is required</span>}
                                {errors.password?.type === "pattern" && <span className='text-red-700 text-xs font-semibold'>Must be one uppercase,one spacial,one lowercase character and no space and number  is required</span>}
                            </div>

                            <button className="btn btn-accent text-xl font-semibold mt-4">Sign Up </button>

                            <div className='mt-2'>
                                <p className='text-xl'>Already registered? <Link to='/login'>Go to login</Link></p>
                            </div>
                            <div className="divider text-xl">or</div>
                            <div className='flex justify-center space-x-4 '>
                                <img onClick={handleGoogleAuthProvider} className='w-8 bg-center' src={google} alt="google image" />
                                <img onClick={facebookAuth} className='w-8 bg-center' src={facebook} alt="facebook" />
                                <img onClick={githubAuth} className='w-8 bg-center' src={github} alt="github" />
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;