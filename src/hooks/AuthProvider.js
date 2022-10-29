import { useEffect, useState } from "react";
import { createContext } from "react";
import { useContext } from "react";
import { onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../config/firebase-config'

const authContext = createContext();

export default function useAuth(){
    return useContext(authContext);
}

export function AuthProvider(props){
    const [user, setUser] = useState(null);
    
    useEffect(()=>{
        onAuthStateChanged(auth, (data) =>{
            if(data !== null){
                setUser(data.displayName);
            }           
        })
    },[])

    useEffect(()=>{
        console.log(user);
    },[user])

    const login = async () => {
        console.log('login');
        const provider = new GoogleAuthProvider();
        
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                setUser(result.user);
                // ...
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("error mssg: " + errorMessage);
                console.log(("error code: " + errorCode))
            });

    };
    
    const logout = async () =>{
        await signOut(auth).then(() => {
            console.log("signed out");
        }).catch((error) => {
            console.log(error);
        });
        setUser(null)
    };

    const value = { login, logout, user }

    return <authContext.Provider value={ value } { ...props } />
}