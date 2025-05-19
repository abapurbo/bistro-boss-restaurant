import { createUserWithEmailAndPassword, FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase';
export const Context = createContext(null)
const AuthContext = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState([])
    const [photo,setPhoto]=useState('')
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    const facebookProvider = new FacebookAuthProvider()
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false)
            console.log(currentUser)
            setPhoto(currentUser?.photoURL)
            setUser(currentUser)
        

        })
        return (() => {

            unSubscribe('')
        })
    }, [])

    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //login user
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logOutUser
    const signOutUser= () => {
        return signOut(auth)
        .then(()=>console.log('logOUt'))
        .catch(error=>console.log(error))
       
    }
    const updateUser = (profile) => {
        return updateProfile(auth.currentUser,profile)
    }
    // google provider
    const googleAuth = () => {
      return  signInWithPopup(auth,googleProvider)
    }
    const githubAuth = () => {
       return signInWithPopup(auth,githubProvider)
    }
    const facebookAuth = () => {
       return signInWithPopup(auth,facebookProvider)
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