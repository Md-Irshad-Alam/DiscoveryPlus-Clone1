import React from 'react'
import { Routes, Route, Router } from 'react-router-dom'
import { AuthContextProvider } from '../Context/context'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import Payment from '../Payment/Payment'
function RouterLoging() {
  return (
    <div>
      <AuthContextProvider>
      <Routes>
        <Route path='/login' element={<LoginForm/>}/>
        <Route path='/register' element={<RegisterForm/>}/>
        <Route path='/payment' element={<Payment/>}/>
      </Routes>
      </AuthContextProvider>
    </div>
  )
}
export default RouterLoging
