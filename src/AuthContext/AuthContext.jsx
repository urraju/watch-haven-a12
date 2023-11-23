
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Components/FirebaseConfig/FirebaseConfig";

export const AuthProvider = createContext()
const googleProvider = new GoogleAuthProvider()
const AuthContext = ({children}) => {
    const [user ,setUser] = useState(null)
    const [loading , setLoading] = useState(true)
    

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
    // useEffect(() => {
    //     const unSubscribe = onAuthStateChanged(auth, currentUser => {
    //         setUser(currentUser)
    //         if(currentUser){
    //             const userInfo = {email : currentUser.email}
    //             axiosPublic.post('/jwt', userInfo)
    //             .then(res => {
    //                 if(res.data.token) {
    //                     localStorage.setItem('access-token', res.data.token)
    //                     setLoading(false)
    //                 }
    //             })
    //         }else{
    //             localStorage.removeItem('access-token')
    //             setLoading(false)
    //         }
            
    //     })
    //     return () => {
    //         unSubscribe()
    //     }
    // },[axiosPublic])
    const authInfo = {registation,signIn,singout,user,loading,google}
    return(
        <AuthProvider.Provider value={authInfo}>
             {children}
        </AuthProvider.Provider>
    )}
export default AuthContext;