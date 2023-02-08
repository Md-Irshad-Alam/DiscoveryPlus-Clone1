
import { Footer } from '../footer/Footer'
import { Routes, Route, Router } from 'react-router-dom'
import Watch from '../Kids_componanrts/Watch'
import { Premium } from '../Primium/Premium'
import Short from '../shorts/short'
import Kids from '../Kids_componanrts/Kids'
import { Home } from '../LandingPage/home'
import { Explore } from '../explore/explore'
import Video_prem from '../Kids_componanrts/video_prem'
import { ShowYouLove } from '../LandingPage/showYouLove'
import RegisterForm from '../Login&Signup/RegisterForm'
import LoginForm from '../Login&Signup/LoginForm'
import Login from '../Login&Signup/Login'
import { AuthContextProvider } from '../Context/context'
import { Navbar } from '../LandingPage/navbar'


function AllRouter() {
  return (
    <div >
      <AuthContextProvider>
     
      <Routes>
        
         <Route path="" element={<Home/>}/>
       
        <Route path="/home" element={<Home/>}/> 
         <Route path='/explore's element={<Explore/>}/>
         <Route path='/Shows_You_Love's element={<ShowYouLove/>}/>
        <Route path='/kids' element={<Kids/>} />
        <Route path='/watch' element={<Watch/>}/>
        < Route path='videopremium' element={<Video_prem/>}/>
        < Route path='/premium' element={<Premium/>}/> 
        <Route path='/shorts' element={<Short/>}/>
        <Route path='*' element={<div>Not Found</div>}/> 
      </Routes>
      
      </AuthContextProvider>
    </div>
  )
}
export default AllRouter
