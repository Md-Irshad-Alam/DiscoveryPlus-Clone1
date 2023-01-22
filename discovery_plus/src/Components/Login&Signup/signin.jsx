
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./signin.css"




export const Signin= () => {
   
    const [ip,setIp] = useState("");
    const [mno,setMno] = useState("");
    const navigate = useNavigate()
    

    const handleChange = (e) => {
        setIp(e.target.value)
    }
    
     
    const getotp = () =>
    {
        
        if(ip.length === 10)
        {
            navigate('/signin2', { replace: true });     
        }
        else
        {
            alert("Enter Valid Number ")
        }
    }

    return (
         <>
        
         <div id="centerbox">
             <div>
               <span>Sign In Now</span>
            <p> Save your preferences & discover great  </p>
            <p>recommendations</p>
            <input placeholder="Mobile Number" onChange={ handleChange }/><br/>
            <button onClick={getotp} >Get OTP</button>

            
            <p>OR</p>
            
            <p >View other sign in Options</p>
             <p>By signing in, you agree to our</p>
           <p> Privacy Policy & Terms of Use</p>
            </div>
        </div>
          
                
               
        </>
    );  
};