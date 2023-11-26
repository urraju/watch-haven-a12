
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Components/FirebaseConfig/FirebaseConfig";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthProvider = createContext()
const googleProvider = new GoogleAuthProvider()
const AuthContext = ({children}) => {
    const [user ,setUser] = useState(null)
    const [loading , setLoading] = useState(true)
    const axiosPublic = useAxiosPublic()

    const google = () => {
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    const registation = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email, password)
    }
    const signIn = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const singout = () => {
        setLoading(true)
        return signOut(auth)
    }
    const userUpdateProfile = (name,photo) => {
        return updateProfile(auth.currentUser,{
           displayName : name, photoURL : photo
        })
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            if(currentUser){
                const userInfo = {email : currentUser.email}
                axiosPublic.post('/jwt', userInfo)
                .then(res => {
                    if(res.data.token) {
                        localStorage.setItem('access-token', res.data.token)
                        setLoading(false)
                    }
                })
            }else{
                localStorage.removeItem('access-token')
                setLoading(false)
            }
            
        })
        return () => {
            unSubscribe()
        }
    },[axiosPublic])
    const authInfo = {registation,signIn,singout,user,userUpdateProfile,loading,google}
    return(
        <AuthProvider.Provider value={authInfo}>
             {children}
        </AuthProvider.Provider>
    )}
export default AuthContext;