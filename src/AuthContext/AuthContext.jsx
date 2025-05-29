import { createUserWithEmailAndPassword, FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase';
import useAxiosPublic from './../hook/useAxiosPublic';
export const Context = createContext(null)
const AuthContext = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState([])
    const [photo, setPhoto] = useState('')
    const axiosPublic = useAxiosPublic()
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    const facebookProvider = new FacebookAuthProvider()
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                const userInfo = { email: currentUser?.email };
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token)
                            setLoading(false)
                        }

                    })
            }
            else {
                localStorage.removeItem('access-token')
                setLoading(true)

            }


            setPhoto(currentUser?.photoURL)
            setUser(currentUser)



        })
        return (() => {

            unSubscribe('')
        })
    }, [axiosPublic])

    // create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //login user
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logOutUser
    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
            

    }
    const updateUser = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }
    // google provider
    const googleAuth = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const githubAuth = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }
    const facebookAuth = () => {
        setLoading(true)
        return signInWithPopup(auth, facebookProvider)
    }

    const userInfo = {
        user,
        photo,
        loading,
        createUser,
        loginUser,
        signOutUser,
        updateUser,
        googleAuth,
        githubAuth,
        facebookAuth,


    }
    return (
        <Context.Provider value={userInfo}>
            {children}
        </Context.Provider>
    );
};

export default AuthContext;