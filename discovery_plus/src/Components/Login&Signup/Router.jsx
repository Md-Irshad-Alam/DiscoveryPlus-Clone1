import React from 'react'
import { Routes, Route, Router } from 'react-router-dom'
import { AuthContextProvider } from '../Context/context'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import Payment from '../Payment/Payment'
import AccountDetailsCard from './UserDetails'
import { Navbar } from '../LandingPage/navbar'
function RouterLoging() {
  return (
    <div>
      <AuthContextProvider>
      <AccountDetailsCard/>
     
      <Routes>
      
        <Route path='/login' element={<LoginForm/>}/>
        <Route path='/register' element={<RegisterForm/>}/>
      </Routes>
      <Routes>
        {
          
        }
      </Routes>
      </AuthContextProvider>
      
    </div>
  )
}
export default RouterLoging
