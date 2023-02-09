import React from 'react'
import "./Voucher.css"
import {Link, useNavigate} from "react-router-dom"
import Payment from '../Payment/Payment'
import { cookieStorageManager, Divider, Spacer } from '@chakra-ui/react'
import {useState} from 'react'
import { width } from '@mui/system'
const Voucher = ({data}) => {
  let history = useNavigate();
  const [voucher, setvocher]  = useState(" ")
  let price = 399;
  let handleinput =()=>{
      if(voucher ==="Irshad_30"){
       const  new_price =  (price/100)*30;
       localStorage.setItem("applied_price", new_price);
       window.alert("Voucher Applied You got 30% OFF")
        history('/payment')
       console.log(new_price);
      }else{
      window.alert("Wrong Voucher Code")
      }
  }
 
  console.log(voucher);
  return (
      <div className='voucher_container'>
       <div className='image_part'>
        <img src="https://auth.discoveryplus.in/logo-f12d84939e917975825b77ad0a95e8f0.png"/>
       </div>
    <div className='v_10'>
       <div className='v_11'>
            <h1>Redeem Voucher</h1>
            <span className='v_1'>Apply This Voucher :-  </span>
            <span className='v_2'>Irshad_30</span>
        </div>
       
        <Divider bg="ghostwhite"  padding="1px" height="10px"/>
        <br />
            <div className='v_12'>
              <input type="text" placeholder='Enter  voucher' name='voucher' onChange={(e)=>
              setvocher(e.target.value) }
                 />
            </div>
            <br />
            <p className="text-sm" >By clicking on the button, I agree to the Terms of Use</p>
            <br />
          <button onClick={handleinput}
         className="bg-teal-600 p-1 rounded-md ">Continue</button>
        </div>
  
    </div>
  )
}

export default Voucher