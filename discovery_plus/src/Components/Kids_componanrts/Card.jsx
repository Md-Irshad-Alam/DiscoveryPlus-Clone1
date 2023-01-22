import { background } from '@chakra-ui/react';
import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from './KIDS_css/card.css'
import play from './play.png'
import { Spinner } from '@chakra-ui/react'


function Card() {
    const [state, setstate] = useState([]);
    const [state2, setstate2] = useState([]);
    const [loding, setloding] = useState(false);
    let getdata = async(size=1000)=>{
        setloding(false)
        let res  =  await fetch(`https://testapi-7cxh.onrender.com/Watching?_limit=${size}`)
        let data = await res.json();
        setstate(data);
        setloding(true);
    }
    let getdata2 = async(size=1000)=>{
        setloding(false)
        let res  =  await fetch(`https://testapi-7cxh.onrender.com/Singham?_limit=${size}`)
        let data = await res.json();
        setstate2(data);
        setloding(true);
    }

    useEffect(()=>{
        getdata(4);
        getdata2(4);
    },[]);
  


  return (
    
    <>
    <div className='watching_cart sm '>
        
    <div className='ViewAll'> 
        <h3>Everyone's Watching</h3>
  
        <button onClick={()=>getdata()}>View All</button>
        </div> 
        <div className='card_container'>
       
                    {
            state.map((data, id)=>{
            return(
              <>
              <Link to="/watch">
              <div className='content_img' onClick={()=>{
                   localStorage.setItem("Clicked", JSON.stringify({data}));
                }}>
               
                <img src={data.img} alt=""  />
              <div className="visible relative top-0 left-0">
              <i class="fa-solid fa-crown text-xl bg-sky-600 w-6 h-6 p-0 ml-2 mt-2 rounded-1 bg-hex flex justify-center"/>
              </div>
               <div className='hide_title'>
                   <div className='play_btn'>
                     <i class="fa-regular fa-circle-play"></i>
                     </div>
                     <h4 className='text-md'>{data.title}</h4>
                    <p className='text-sm text-gray-400'>{data.dis}</p>
               </div>
              </div>  </Link>
            
              </>
            )

            })
        }
     
    </div>
    </div>
    <br />
    <div className='watching_cart tablet'>
        <div className='flex-end viewAll'> 
          <h3>Little Singham VS Kaal</h3>
          <button onClick={()=>getdata2()}>View All</button>
        </div>
            
        <div className='card_container'>
                    {
            state2.map((data, id)=>{
                
            return(
              <>
              
          <Link to="/watch">
              <div className='content_img' onClick={()=>{
                   localStorage.setItem("Clicked", JSON.stringify({data}));
                }}>
               
                <img src={data.img} alt=""/>
              <div className="visible relative top-0 left-0">
                <i class="fa-solid fa-crown text-xl bg-sky-600 w-6 h-6 p-0 ml-2 mt-2 rounded-1 bg-hex flex justify-center"/>
              </div>
               <div className='hide_title'>
                   <div className='play_btn'>
                     <i class="fa-regular fa-circle-play"></i>
                     </div>
                    <h4 className='text-md text-white'>{data.title}</h4>
                    <p className='text-sm text-gray-400'>{data.dis}</p>
               </div>
              </div>
          </Link>
              </>
            )

            })
        }
     
    </div>
    </div>
    </>
  )
}

export default Card
