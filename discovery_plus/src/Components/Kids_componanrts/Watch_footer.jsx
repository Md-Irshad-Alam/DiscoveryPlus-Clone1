import React from 'react'
import { Card } from '@chakra-ui/react';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import style from "./KIDS_css/watch_footer.css"
function Watch_footer() {
    const [state, sestate] = useState([]);
    let getdata = async()=>{
        let res  =  await fetch(`https://testapi-7cxh.onrender.com/Watching`)
        let data = await res.json();
        sestate(data);
        
    }

    useEffect(()=>{
        getdata();
        
    },[]);
  return (
    <div className= 'Watch_footer bg-plus_back'>
      
      <div className='video_main_container bg-plus_back cursor-pointer'>
      {
        state.map((data)=>{
            return(
  
                <div className='vide_main_inner_cont '>
                   <Link to="/videopremium">
                   <div className='Video_main_inner_cont'>
                    <img src={data.img} alt="img" className='w-fit h-fit'/>
                       <div className=" play_container">
                       <i class="fa-regular fa-circle-play text-white bg-plus_back rounded-full"></i>
                       </div>
                     <div className="hover_containt_video visible">
                     <h1>{data.title}</h1>
                      <p>{data.dis}</p>
                     </div>
                    </div>
                   </Link>
                </div>
            )

        })
      }
      </div>
    </div>
  )
}

export default Watch_footer
