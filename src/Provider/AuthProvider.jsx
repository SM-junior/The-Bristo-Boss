import { createContext, useEffect } from 'react';
import { useState } from 'react';
import { app } from '../firebase/firebase.config';
import axios from 'axios';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


const auth = getAuth(app)
const authContext = createContext();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const updateUserProfile = (name, url) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: url
        })
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)

            //get and set token
            if (currentUser) {
                axios.post('http://localhost:3000/jwt', {
                    email: currentUser.email
                })
                    .then(data => localStorage.setItem('access-token', data.data))
            }
            else {
                localStorage.removeItem('access-token')
            }

            setLoading(false)
        })
        return () => {
            return unsubscribe;
        }
    }, [])

    const userInfo = {
        user,
        loading,
        createUser,
        login,
        googleLogin,
        logOut,
        updateUserProfile
    }
    return (
        <authContext.Provider value={userInfo}>
            {children}
        </authContext.Provider>
    );
};

export { AuthProvider, authContext };