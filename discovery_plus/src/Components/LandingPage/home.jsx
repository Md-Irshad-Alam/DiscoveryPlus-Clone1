
import {Slider} from "./slider"
// import {Caro} from "./manual_carousel"
import { Corosuel } from "./corosuel"
import { ShowYouLove } from "./showYouLove"
import { IndiaHistory } from "./IndiaHistory"
import { NewlyAddedShows } from "./Newly"
import { StreamForFree } from "./streamForFree"
import { Navbar } from "./navbar"

export const Home=()=> {
    return (
      
    <>
    <Navbar/>
    <Corosuel />
     <Slider />
     <ShowYouLove/>
     <NewlyAddedShows/>
    <IndiaHistory/>
    <StreamForFree/>
    
     </>
    )
}
