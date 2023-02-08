import React from 'react'
import Video from './video'
import Premium from './video_prem'
import Watch_footer from './Watch_footer'
import Card from './Card'
// import { HelpTextProps } from '@chakra-ui/react'
import { Navbar } from '../LandingPage/navbar'
function Watch() {

  return (
    <div className="bg-plus_back">
     <Navbar/>
      <Video/>
      <Watch_footer/>
     
    </div>
  )
}

export default Watch
