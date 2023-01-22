import React from 'react'
import "./payment.css"
const Payment = () => {
  
  return (
    <div className='body'>

  <div className="main">
        <div className="firstpart">
            <h1>Payment Details</h1>
            <form>
                <p>NAME:</p>
                <input type="text" placeholder="Enter Name" id="name"/>
                <p>Card Number:</p>
                <input type="number" placeholder="**** **** **** ****" id="cardnumber"/>
           
        <div className="secondpart">
            <input type="number" placeholder="Expiry Year" id="expiry"/>
            <input type="number" placeholder="CVV" id="cvv"/>
        </div>
        <br></br>
        <a href="./otp.html">
        <input type="submit" value="Payment" class="submit"/></a>
            </form>
        </div>
        </div>
    </div>
  
  )
}

export default Payment