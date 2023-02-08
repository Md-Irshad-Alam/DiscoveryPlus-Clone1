import React, { useEffect, useState } from 'react'
import {getLoggedInUser, loginApi} from './User';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const AuthContext = React.createContext({
   
    user: null,
    setUser: (user) => {},
    showLoginForm: false,
    setShowLoginForm: (show) => {},
    login: (email, password) => {

    },
    logout: () => {},
})

export function AuthContextProvider({children}) {
    let history = useNavigate();
    const [user, setUser] = useState(null);
    const [showLoginForm, setShowLoginForm] = useState(false);

    function login(email, password) {
       
        loginApi(email, password)
        .then(response => {
          
            const token = response.data.token;

            localStorage.setItem('auth-token', token);
            let gettoken = localStorage.getItem('auth-token');
            if(gettoken===token){
                window.alert("user already login")
            }else{
                window.alert("login Successful")
            }
            console.log(gettoken)
           
            history('/home')
        })
        .catch(err => {
            toast('Login failed', {
                type: 'error'
            })
        })
    }

    function logout() {
        localStorage.removeItem('auth-token');
        window.location.reload();
        window.alert("you Logged Out");
    }

    useEffect(() => {
        getLoggedInUser()
        .then(response => {
            const user = response.data.data;

            setUser(user);
        })
    }, [showLoginForm])

    return <AuthContext.Provider value={{
        user, setUser,
        showLoginForm, setShowLoginForm,
        login, logout,
    }}>
        {children}
    </AuthContext.Provider>
}

export default AuthContext;