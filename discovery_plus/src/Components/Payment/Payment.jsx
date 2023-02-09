import { Divider, Spacer } from '@chakra-ui/react'
import React from 'react'
import { Navbar } from '../LandingPage/navbar'
import "./payment.css"
import {useState} from 'react'

import { useNavigate } from 'react-router-dom'
const Payment = () => {
  let data = localStorage.getItem("applied_price");
  const [inputdata, setdata] = useState([{
    
      name:'',
      number:'',
      data:'',
      cvv:'',
    
  }])
  let history = useNavigate();
  const [load, setloging]  = useState('true')
  console.log(inputdata)


  function lodingwheel(callback){
    
    setTimeout(function(){
      window.alert("payment Success")
      history('/home')
        callback();
    },3000)
   
   }
  return (

 <div>
  <div className='payment_image_part'>
        <img src="https://auth.discoveryplus.in/logo-f12d84939e917975825b77ad0a95e8f0.png"/>
      </div>
      

   <form action="">
   <div className="Payment_inner_cnt">
        <div className="p_10">
        <div className='p_9'>
         
        <h1 className='text-xl '>Payment Details</h1>
        <div>
         <span className='t_1'>Payable Amount is:- Rs.{data} </span>
        </div>
        </div>
        <Divider padding="1px" marginTop="10px" background="ghostwhite"/>
        <br />
          <div className='p_11'>
            <input type="text" placeholder='Your Name' name='name'  onChange={(e)=> setdata(e.target.value)} required/>
          </div>
          <br />
          <div className="p_12">
            <input type="number"  placeholder='Enter Card Number' name='number' onChange={(e)=> setdata(e.target.value)} required/>
          </div>
          <br />
        <div className='p_13'>
            <input type="date" placeholder="Expiry Year" id="expiry" name="data" onChange={(e)=> setdata(e.target.value)}required/>
            <input type='password' placeholder="CVV" id="cvv"name='cvv' onChange={(e)=> setdata(e.target.value)} required/>
        </div>

        <br></br>
       
       <div className='p_14'>
       <button onClick={lodingwheel} class="submit">Paymment</button>
       </div>
          
        </div>
    </div>
   </form>
 </div>
  
  
  )
}

export default Payment