import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.cofig";
import PropTypes from 'prop-types';
const auth = getAuth(app);

export const Authcontext=createContext(null);
const AuthProvider = ({children}) => {
    const [user,setuser]=useState(null)
    const [loading,setloading] =useState(true)

const creatuser =(email,password)=>{
    setloading(true)
    return createUserWithEmailAndPassword(auth,email,password);
}

const signIn = (email,password) =>{
    setloading(true);
    return signInWithEmailAndPassword(auth,email,password);
}

const logOut =() =>{
    setloading(true);
    return signOut(auth);
}

useEffect(()=>{
    const unsubscrib = onAuthStateChanged (auth,currentUser =>{
        // console.log(currentUser);
        setuser(currentUser);
        setloading(false);
    }) ;
    return () =>{
        unsubscrib();
    }
}
,[])

    const authInfo ={
        user,
        loading,
        creatuser,
        signIn,
        logOut
    };
    return (
        <Authcontext.Provider value={authInfo}>
            {children}
        </Authcontext.Provider>
    );
};



export default AuthProvider;
AuthProvider.propTypes={
    children: PropTypes.node,
}