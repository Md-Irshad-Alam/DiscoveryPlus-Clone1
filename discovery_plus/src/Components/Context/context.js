import React, { useEffect, useState } from 'react'
import {getLoggedInUser, loginApi} from './User';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AuthContext = React.createContext({
    // user: null,
    // setUser: (user) => {},
    // showLoginForm: false,
    // setShowLoginForm: (show) => {},
    // login: (email, password) => {},
    // logout: () => {},
})

export function AuthContextProvider({children}) {
    let history = useNavigate();
    const [user, setUser] = useState(null);
    const [name, setname] = useState(undefined);

    const [showLoginForm, setShowLoginForm] = useState(false);

    function login(email, password) {
        loginApi(email, password)
        .then(response => {
           
            const token = response.data.token;
            localStorage.setItem('auth-token', token);

            setShowLoginForm(false);
            const user = response.data;
            window.alert("login Successful")
            history('./home')
        })
        .catch(err => {
            window.alert("Login faild")
        })
    }

    function logout() {
        localStorage.removeItem('auth-token');
        window.location.reload();
    }

    useEffect(() => {
        getLoggedInUser()
        .then(response => {
            const user = response.data;
            setUser(user);
            setname(user.data.name);
            // console.log(user.data.name)
           
        })
    }, [showLoginForm])

    return <AuthContext.Provider value={{
        user, setUser, name,setname,
        showLoginForm, setShowLoginForm,
        login, logout,
    }}>
        {children}
    </AuthContext.Provider>
}
export default AuthContext;