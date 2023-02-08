import React from 'react'
import Slider from './kids_craousel'
import Card from './Card' 
import { Navbar } from '../LandingPage/navbar'



function Kids() {
  return ( 
    <div className='bg-plus_back'>
     <Navbar/>
     <Slider/>
     <Card/>
    </div>
  )
}

export default Kids
