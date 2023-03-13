
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


export const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [userexpanded, setuserIsExpanded] = useState(false);
const [data , setdata]= useState([]);
const [showlogin, setshowlogin] = useState(false)
const {user, name, logout, email} = useContext(AuthContext)

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleuser = () => {
    setuserIsExpanded(!userexpanded);
  };


  const history = useNavigate();
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
    
    const handlechange = async (e) => {
     const {value}=e.target
     const result = await fetch(`https://testapi-7cxh.onrender.com/Watching?q=${value}`);
     const out = await result.json();
     setdata(out)
    };
 useEffect(()=>{
  handleuser();
 },[])
    
   
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
                    <input placeholder="Search for a show, etc" w='fit-content' onChange={debounce(handlechange)} onKeyUp={debounce} />
                </div>
              
             <div className="outter_serrch_container">
             <div className="search_list">
             
               {
                 data.map((ele)=>{
                 return (
                   <div className="search_itmes">
                     <img src={ele.img} alt="" />
                     <span>{ele.title} hello</span>
                   </div>
                 )
                })
                
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

                   <div className={`user_details ${userexpanded ? 'expanded_user' : ''}`}>
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

































// import { Search2Icon } from "@chakra-ui/icons";
// import {Flex,Box,Spacer, Image,Center, Button, ChakraProvider, useFocusEffect, Show, Input,} from "@chakra-ui/react";
// import {json, Link} from "react-router-dom"
// import syle from './navbar.css'
// import {useState, useEffect} from 'react'
// import Login from "../Login&Signup/Login";
// import RegisterForm from "../Login&Signup/RegisterForm";
// import { useNavigate } from "react-router-dom";
// import React, { useContext } from "react";
// import AuthContext from "../Context/context";
// import LoginForm from "../Login&Signup/LoginForm";
// import config from "../../config/config";
// import { width } from "@mui/system";
// import { Hidden } from "@mui/material";

// export const Navbar= ({user}) => {

//  let history = useNavigate();

//  const [show, setshow]  = useState("login");
//  const [datas, setDatas] = useState([]);
//   const [userdata, setuserdata] = useState("")
//  const [showNewComponent, setShowNewComponent] = useState(true);
// const [username , setusername] = useState( user)

// const debounce = (calback)=>{
// let timmer;
// return function (...args){
//  let context  = this;
//  if(timmer) clearTimeout(timmer);
//  timmer = setTimeout(()=>{
//    calback.apply(context, args)
//  }, 100)

// }
// }
// const handlechange = async (e) => {
//  const {value}=e.target
//  const result = await fetch(`https://testapi-7cxh.onrender.com/Watching?q=${value}`);
//  const out = await result.json();
//  setDatas(out)
// };


// useEffect(()=>{
//   setuserdata(user);
  
// },[user]);
// console.log(userdata);
// return (
//    <div className="navbar_main_container" >
  
//        <ChakraProvider >
//          <Flex bg="black" alignItems="center" h="60px"gap={7} justifyContent={"center"} >
            
//               <Box display="flex" gap={4}>
//               <Image w="200px" alt="discovery Logo" src="./login_logo.png" />
//               </Box>
           

        
//         <Box  display="flex" fontSize="1rem" color="gray.200" maxw="auto" 
//           font-family='Roboto-Regular, sans-serif'
//           font-weight="700">
//             <Link to="/" className="home">Home</Link>
//             <Link to="/explore">Explore</Link> 
//             <Link to="/kids">Kids</Link>
//             <Link to="/shorts">Shorts</Link> 
//             <Link to="/premium">Premium</Link>
           
          
//         </Box>
//         <Spacer/>
//         <Box display="flex" justifyContent="space-between">

//         <div className="search_main_container">
//                 <div className="search_input">
//                     <Input placeholder="Search for a show, etc" w='fit-content' onChange={debounce(handlechange)} onKeyUp={debounce} />
//                 </div>
              
//              <div className="outter_serrch_container">
//              <div className="search_list">
//                {
//                  datas.map((ele)=>{
//                  return (
//                    <div className="search_itmes">
//                      <img src={ele.img} alt="" />
//                      <span>{ele.title} hello</span>
//                    </div>
//                  )
//                 })
                
//                }
//              </div>  
//              </div>
//             </div>  

//             <div >
             
             

              
//                 <div>
//                   {
//                   user? (
//                     <Button>My account</Button>
//                   ) : (
//                     <Link to="/login">
//                       <Button border="none" bg="blue.500" color="white">
//                         Login
//                       </Button>
//                     </Link>
//                   )}
//                 </div>
            
              
//             </div>

//         <div  className="BuyNow_btn" style={{overflow:"hidden"}}>
//         <div>
//           <Link to="/login"><Button border="none" bg="blue.500" color="white">{"Buy Plan"}</Button></Link>
//           </div>
//         </div>
//       </Box>  
        
       
      
//        </Flex>
//        </ChakraProvider>

   
   
          
//    </div>
// );  
// };


