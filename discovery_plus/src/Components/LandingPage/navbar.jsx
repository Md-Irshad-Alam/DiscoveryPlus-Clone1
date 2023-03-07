import { Search2Icon } from "@chakra-ui/icons";
import {Flex,Box,Spacer, Image,Center, Button, ChakraProvider, useFocusEffect, Show, Input,} from "@chakra-ui/react";
import {json, Link} from "react-router-dom"
import syle from './navbar.css'
import {useState, useEffect} from 'react'
import Login from "../Login&Signup/Login";
import RegisterForm from "../Login&Signup/RegisterForm";
import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import AuthContext from "../Context/context";
import LoginForm from "../Login&Signup/LoginForm";
import config from "../../config/config";
import { width } from "@mui/system";
import { Hidden } from "@mui/material";

export const Navbar= ({user}) => {

 let history = useNavigate();

 const [show, setshow]  = useState("login");
 const [datas, setDatas] = useState([]);

 const [showNewComponent, setShowNewComponent] = useState(true);
const [username , setusername] = useState( user)

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
 setDatas(out)
};

console.log(!user);

return (
   <div className="navbar_main_container" >
       <ChakraProvider >
         <Flex bg="black" alignItems="center" h="60px"gap={7} justifyContent={"center"} >
            
              <Box display="flex" gap={4}>
              <Image w="200px" alt="discovery Logo" src="./login_logo.png" />
              </Box>
           

        
        <Box  display="flex" fontSize="1rem" color="gray.200" maxw="auto" 
          font-family='Roboto-Regular, sans-serif'
          font-weight="700">
            <Link to="/" >Home</Link>
            <Link to="/explore">Explore</Link> 
            <Link to="/kids">Kids</Link>
            <Link to="/shorts">Shorts</Link> 
            <Link to="/premium">Premium</Link>
        </Box>
        <Spacer/>
        <Box display="flex" justifyContent="space-between">
        <div className="search_main_container">
                <div className="search_input">
                    <Input placeholder="Search for a show, etc" w='fit-content' onChange={debounce(handlechange)} onKeyUp={debounce} />
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
            <div >
             
             

              
                <div>
                  {!user===undefined ? (
                    <Button onClick={() => setshow("My account")}>My account</Button>
                  ) : (
                    <Link to="/login">
                      <Button border="none" bg="blue.500" color="white">
                        Login
                      </Button>
                    </Link>
                  )}
                </div>
            
              
            </div>

        <div  className="BuyNow_btn" style={{overflow:"hidden"}}>
        <div>
          <Link to="/login"><Button border="none" bg="blue.500" color="white">{"Buy Plan"}</Button></Link>
          </div>
        </div>
      </Box>  
        
       
      
       </Flex>
       </ChakraProvider>

   
   
          
   </div>
);  
};

