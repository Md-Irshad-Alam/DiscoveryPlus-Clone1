
import React, { useState } from 'react';
import '../demo.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { Spacer } from '@chakra-ui/react';
import { Button } from '@mui/material';
import { Image } from '@chakra-ui/react';
import syle from './navbar.css'
import AuthContext from '../Context/context'
import { useContext, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import MicIcon from '@mui/icons-material/Mic';
import { toast } from 'react-toastify';
const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
const recognition = new SpeechRecognition();

export const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [userexpanded, setuserIsExpanded] = useState(false);
  const [searchexpanded, setsearchExpanded] = useState(false);
  const [data , setdata]= useState([]);
  const [showlogin, setshowlogin] = useState(false)
  const {user, name, logout, email} = useContext(AuthContext)
  const [text, settext] = useState("");
  var [searchQuery, setSearchQuery] = useState('');
  const [notfound, setNotFound] = useState(false);


  
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
console.log(userexpanded)
  const handleuser = (e) => {
    setuserIsExpanded(!userexpanded);
  };
  // debounce functions 

  const debounce = (calback)=>{
    let timmer;
    return function (...args){
     let context  = this;
     if(timmer) clearTimeout(timmer);
     timmer = setTimeout(()=>{
       calback.apply(context, args)
     }, 100)
    
    }
    }
 
  //  code for voice search start 
  let play1 = './sound-btn.wav'
  let play2 = './sound2.wav'
  let sound1 = new Audio(play1);
  let sound2 = new Audio(play2);

  const handleVoiceSearch =async() => {
     recognition.start();
     sound1.play();
    }
  recognition.onresult = async(event) => {
    setSearchQuery(event.results[0][0].transcript);
  
    
  };

  recognition.onerror = (event) => {
    toast('Speech recognition error:', event.error);
  };

  recognition.onend =async (e) => {
     // restart speech recognition after 1 second
     setTimeout(()=>{
     recognition.stop()
     sound2.play();
    
     },1000)
     e.preventDefault();
     
   
 
    getdetails();
  };
 
  let getdetails = async () => {
    try {
      const result = await fetch(`https://testapi-7cxh.onrender.com/Watching?q=${searchQuery}`);
      const out = await result.json();
  
      const filteredResults = out.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setdata(filteredResults);
      setNotFound(filteredResults.length === 0);
    } catch (error) {
      setNotFound(true);
      setdata([]);
    }
  };
  console.log(data.length);

  const handlechange = async (e) => {
    setSearchQuery(e.target.value);
   debounce(getdetails());

  };


  return (
    <nav className="navbar2">
      <div className='left_part_nav_2'>
       
        
        <button className="navbar-toggle" onClick={handleToggle}>
            <span className="navbar-toggle-icon">&#9776;</span>
        </button>
        
        <div className='navb_logo'>
        <Image w="200px" alt="discovery Logo" src="./login_logo.png" />
        </div>
        <div className={`navbar-links ${isExpanded ? 'expanded' : ''}`}>
            <Link to="/" >Home</Link>
            <Link to="/explore">Explore</Link> 
            <Link to="/kids">Kids</Link>
            <Link to="/shorts">Shorts</Link> 
            <Link to="/premium">Premium</Link>
            
        </div>
        </div>
        <br />
     
           <div className='rightNavbar'>
            <div className="navbar-search">
            <div className="search_main_container">
                <div className="search_input">
                    <input placeholder="Search for a show, etc" value={searchQuery}  w='fit-content' onChange={handlechange}/>

                 
                <div onClick={()=>{
                  handleVoiceSearch();
                }}>
                   <MicIcon/>
                </div>
                </div>
                
  

             <div className={`  ${searchQuery.length>0? "outter_serrch_showcontainer" : "outter_serrch_hidecontainer "}`}>
             <div className="search_list">
             
               {
                data.length==0 ? (
                  <div className='gif_show'>
                    <p className='not_fd'>Not Found</p>
                    <img src='./not_found.gif'/>
                    </div>
                ):(
                  <div>
                    {
                     searchQuery.length >0 ? (data.map((ele)=>{
                        return(
                          <div className='search_itmes'>
                          <p>{ele.title}</p>
                         <img src={ele.img} alt="" />
                         </div>
                        )
                      })):""
                    }
                  </div>
                )
                
               }
             </div>  
             </div>
            </div>  

                </div>
            
                <div className="buttonpart">
                <div className='loginPartbtn'>
                 
                   {
                    name? (
                     
                      <Button className="navbar-toggl" onMouseUp={handleuser}>
                       My account
                       </Button>
                    )
                    
                    :
                    (<Link to='/login'><Button>Login</Button></Link>)
                   }

                   <div className={` ${userexpanded ? 'expanded_user' : 'user_details'}`}>
                         <p>Name: <span  style={{color:"white",fontWeight:"600"}}>{name}</span></p>
                         <p>Email: <span  style={{color:"white",fontWeight:"600"}}>{email}</span></p>
                         <Button onClick={logout}>Logout</Button>
                       </div>
                </div>
                <br />
                <div className="buyplainbtn">
                    {
                      name ?(<Link to='/premium'><Button>Buy Plan</Button></Link>):(<Link to='/login'><Button>Buy Plan</Button></Link>)
                    }
                </div>
                </div>
           </div>

           
     
    </nav>
  );
};


