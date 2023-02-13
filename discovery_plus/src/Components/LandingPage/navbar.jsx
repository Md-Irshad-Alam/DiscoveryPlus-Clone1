import { Search2Icon } from "@chakra-ui/icons";
import {Flex,Box,Spacer, Image,Input,InputGroup,InputRightElement, Center, Button, ChakraBaseProvider, ChakraProvider, Divider} from "@chakra-ui/react";
import {json, Link} from "react-router-dom"
import syle from './navbar.css'
import Typography from "@mui/material/Typography";
import {useState, useEffect} from 'react'
import Login from "../Login&Signup/Login";
import RegisterForm from "../Login&Signup/RegisterForm";
import { useNavigate } from "react-router-dom";
import { Hidden } from "@mui/material";
import Container from "@mui/material/Container";
import React, { useContext } from "react";
import AuthContext from "../Context/context";
import LoginForm from "../Login&Signup/LoginForm";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import MenuItem from "@mui/material/MenuItem";
import config from "../../config/config";






export const Navbar= ({ children }) => {
   
 let history = useNavigate();
 const name = config.password;
 let pass = config.userName
 const { user, setShowLoginForm, logout } = useContext(AuthContext);
 const [show, setshow]  = useState("login");
 const [data, setdata] = useState([]);
 const [datas, setDatas] = useState([]);

const debounce = (calback)=>{
let timmer;
return function (...args){
 let context  = this;
 if(timmer) clearTimeout(timmer);
 timmer = setTimeout(()=>{
   calback.apply(context, args)
 }, 1000)

}
}

const handlechange = async (e) => {
 const {value}=e.target

 console.log(value)
 const result = await fetch(`https://testapi-7cxh.onrender.com/Watching?q=${value}`);
 const out = await result.json();
 setDatas(out);

};



let username = ''
 const hidelogin = () => {
   setshow(true)
   if(user==null){
     window.location.reload();
    }else{
     history('/login')
     let name= user
     username = name.name;
 
    }
 
 };


 const showlog = () => {
   setshow(true)
   };





return (
   <div className="navbar_main_container">
       <ChakraProvider >
         <Flex bg="black" alignItems="center" h="60px"gap={7} justifyContent={"center"} >
            <Box display="flex" gap={4} >
            <Image w="200px" alt="discovery Logo" src="./login_logo.png" />
         
         </Box>
        
         <Box  display="flex" gap={4} color="gray.200" maxw="300px" 
          font-family='Roboto-Regular, sans-serif'
          font-weight="700">
            <Link to="/" >Home</Link>
            <Link to="/explore">Explore</Link> 
            <Link to="/kids">Kids</Link>
            <Link to="/shorts">Shorts</Link>
            <Link to="/mindblown">Mindblown</Link> 
            <Link to="/premium">Premium</Link>
        </Box>
      <Spacer/>
        <Center >
      
        <div className="search_main_container">
                <div className="search_input">
                    <input placeholder="Search for a show, etc" w={'330px'} onChange={debounce(handlechange)} onkeyup={debounce}/>
                </div>
              
             <div className="outter_serrch_container">
             <div className="search_list">
               {
                
                 datas.map((ele)=>{
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
        
             
            
              <Button onClick={()=>{
               setshow(show==="login"? history('/login') : history('/register'))

              }} margin="10px"> {show==="login" ? "Login": "Log Out"}</Button>
           
        <div  className="BuyNow_btn">
        <Link to="/login"><Button border="none" bg="blue.500" color="white"> {"Buy Plan" } </Button></Link>
        </div>
   
        </Center>
      
       </Flex>
       </ChakraProvider>

   
   
          
   </div>
);  
};

