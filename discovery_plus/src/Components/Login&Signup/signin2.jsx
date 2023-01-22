import "./signin.css"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";




export const Signin2 = () => {

    const otp = Math.floor(100000 + Math.random() * 900000);
    const [verifyotp,setVerifyotp] = useState("");
    const [otp2,seOtp2] = useState("");
    const [s,setS] = useState(true);
    const navigate = useNavigate();
    

    useEffect(() => {
        alert("Your OTP is "+otp)
        seOtp2(otp)
    },[]);   
        
    
    const handlechange = (e) =>
    {
        
        setVerifyotp(e.target.value);

    }

    const votp = () =>
    {
        console.log(verifyotp+"   "+otp2)

        if(otp2 == verifyotp)
        {   
            
            localStorage.setItem("s", JSON.stringify(s));
            navigate('/', { replace: true });
        }
        else
        {
            alert("Invalid OTP")
        }
    }



    return (
        <>       
       <div id="centerbox">
           <div>
              <span>Verify OTP</span>
           <p> Save your preferences & discover great  </p>
           <p>recommendations</p>
           <input placeholder="Enter OTP " onChange={ handlechange } /><br/>
           <button onClick={ votp } >Verify OTP</button>
           <p>OR</p>
           
           <p >View other sign in Options</p>
            <p>By signing in, you agree to our</p>
          <p> Privacy Policy & Terms of Use</p>
           </div>
       </div>
         
               
              
       </>
   );  
};