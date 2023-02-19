import { Divider, Spacer } from '@chakra-ui/react'
import React from 'react'
import { Navbar } from '../LandingPage/navbar'
import "./payment.css"
import {useState} from 'react'

import { useNavigate } from 'react-router-dom'
import { Hidden } from '@mui/material'
const Payment = () => {
  let data = localStorage.getItem("applied_price");
  const [inputdata, setdata] = useState([])
  const [val , setval] = useState([]);
  let history = useNavigate();
  const [load, setloging]  = useState('true')


  const handleinput = (e)=>{
   setdata({...inputdata, [e.target.name]:e.target.value}); 
  
  }
 
  function lodingwheel(count){
    setval(inputdata);
 
    if(val.length >0){
      window.alert("payment faild")
    }else{
      window.alert("payment Success")
      history('/home')
    }

    }
    
  return (

 <div>
  <div className='payment_image_part'>
        <img src="https://auth.discoveryplus.in/logo-f12d84939e917975825b77ad0a95e8f0.png"/>
      </div>
      

 
   <div className="Payment_inner_cnt">
        <div className="p_10">
        <div className='p_9'>
         
        <h1 className='text-xl '>Payment Details</h1>
        <div>
         <p className='t_1'>Payable Amount is:- <span className='t_02'>Rs.{data}</span> </p>
        </div>
        </div>
        <Divider padding="1px" marginTop="10px" background="ghostwhite"/>
        <br />
          <div className='p_11'>
            <input type="text" placeholder='Your Name' name='name'  onChange={handleinput} required />
          </div>
          <br />
          <div className="p_12">
            <input type="number"  placeholder='Enter Card Number' name='number' onChange={handleinput} required/>
          </div>
          <br />
        <div className='p_13'>
            <input type="date" placeholder="Expiry Year" id="expiry" name="data" required/>
            <input type='password' placeholder="CVV" id="cvv"name='cvv'  required/>
        </div>

        <br></br>
       
       <div className='p_14'>
       <button onClick={lodingwheel} class="submit">Paymment</button>
       </div>
          
        </div>
    </div>
 </div>
  
  
  )
}

export default Payment