import React from "react";
import { useState } from "react";

import Premi_back from "../Images/premi_bck.jpg";
import Discovery_logo from "../Images/discovery_logo.png";
import Binge from "../Images/binge_img.png";
import Browse from "../Images/browse_premi.png";
import Watch from "../Images/watch_premi.png";
import Find from "../Images/find_premi.png";
import Stream from "../Images/stream_premi.png";
import Enjoy from "../Images/enjoy_premi.png";
import Cant from "../Images/can't_miss.png";
import Animal_planet from "../Images/animal_planet.png";
import Bbc from "../Images/bbc_premi.png";
import Discov from "../Images/discovery_premi.png";
import Kids_dis from "../Images/discovery_kids.png";
import Sci from "../Images/sci_premi.png";
import Turbo from "../Images/turbo_premi.png";
import DMAX from "../Images/dmax_premi.png";
import Euro from "../Images/eurosport_premi.png";
import Hgtv from "../Images/hgtv_premi.png";
import Invest from "../Images/investi_discovery.png";
import Tlc from "../Images/tlc_premi.png";
import Trvl from "../Images/trvl_premi.png";
import Tv_stream from "../Images/premi_tv.jpg";
import Safe from "../Images/safe_kids.jpg";
import Access from "../Images/get_access.jpeg"
import "./premium.css"
import { Navbar } from "../LandingPage/navbar";


export const Premium=()=>{
    const [style_month, setStyle_month] = useState("button_plan_month");
    const [monthly, setMonthly] = useState("monthly");
    const [amount_plan, setAmount_plan] = useState("amount_plan");
    const [style_year, setStyle_year] = useState("button_plan_year");
    const [annual, setAnnual] = useState("annual");
    const [annual_amount_plan, setAnnual_amount_plan] = useState("annual_amount_plan");
   
    
    
    const changeStyleMonth = () => {
        setStyle_month("button_plan_month2");
        setMonthly("annual");
        setAmount_plan("annual_amount_plan");
        setStyle_year("button_plan_year2");
        setAnnual("monthly");
        setAnnual_amount_plan("amount_plan");
      };

      const changeStyleYear = () => {
        setStyle_month("button_plan_month");
        setMonthly("monthly");
        setAmount_plan("amount_plan");
        setStyle_year("button_plan_year");
        setAnnual("annual");
        setAnnual_amount_plan("annual_amount_plan");
      };

    return<>
  
    <div>

        <div className="premimum_ini">
    <div className="premi_background" style={{ backgroundImage:`url(${Premi_back})` }}> 
    <div className="background_lighting">
    <div className="box_inside_premium">
        <img className="premi_logo" src={Discovery_logo} alt="Logo" />
         <div className="heading_evertything">
          <h2 className="experience_real">Experience Real Life Entertainment Like Never Before with 40+ Genres On Discovery Plus.</h2>
         </div>
        <div className="plan_in_premium">
            <button className={style_month} onClick={changeStyleMonth}><div className="plan_price_month">
        <div className="plan_innercontent">
          <div className="monthly_price">
              <div className={monthly}>Monthly</div>
              <div className={amount_plan}>
              <span className="rupees_symbol">₹</span>
              <span className="rupees_number">199.00</span></div></div>
          </div></div></button>
            
       
          <button className={style_year} onClick={changeStyleYear}><div className="plan_price_year">
           <div className="plan_innercontent">
          <div className="monthly_price">
              <div className="recommended_plan">RECOMMENDED</div>
              <div className={annual}>ANNUAL</div>
              <div className={annual_amount_plan}>
              <span className="annual_rupees_symbol">₹</span>
              <span className="annual_rupees_number">399.00</span></div></div>
          </div>
          </div></button>
        </div>

        <div className="applycoupon">
            <div className="applycoupon_inner">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="percentage_icon">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.085 19.34a10.262 10.262 0 0 0 5.702 1.729 10.274 10.274 0 0 0 10.262-10.262A10.262 10.262 0 1 0 5.085 19.34zm.496-16.324a9.37 9.37 0 0 1 5.205-1.579 9.38 9.38 0 0 1 9.37 9.37 9.37 9.37 0 1 1-14.575-7.79zm.973 6.886a2.306 2.306 0 1 0 2.562-3.835 2.306 2.306 0 0 0-2.562 3.835zM7.05 6.81A1.414 1.414 0 1 1 8.62 9.16a1.414 1.414 0 0 1-1.57-2.35zm6.688 9.383a2.306 2.306 0 1 1 0-4.613 2.306 2.306 0 0 1 0 4.613zm0-3.72a1.413 1.413 0 1 0 0 2.826 1.413 1.413 0 0 0 0-2.826zm-7 3.973a.446.446 0 0 0 .59-.106l8.11-10.519a.446.446 0 1 0-.706-.545L6.621 15.794a.446.446 0 0 0 .117.651z" fill="#9BA1A9"></path>
                </svg>
                    <h2 className="apply_voucher">Apply Voucher</h2>
            </div>
        </div>

        <div className="subscription">
            <button className="subscribe_btn" id="#subscribeButton">Subscribe Now</button>
        </div>
    </div>
    </div>
    </div>
    </div>
          
        
    <div className="premium_block2">
        <div>
      <div className="get_it_all">
          <div className="get_it">Get It All With discovery+</div>
      </div>

      <div className="getit_grid">
      <div className="image1_binge">
       <img className="binge_background-image"
        src={Binge}
        style={{objectPosition: "center top"}} />
        <div className="binge_content">
        <div className="binge_name">Binge</div>
            <div className="binge_transition">
          
            <h6 className="binge_desc">New &amp; Classic Hit Shows</h6></div>
            </div>
      </div>

      <div className="image2_browse">
       <img className="browse_background-image"
        src={Browse}
        style={{objectPosition: "center top"}} />
        <div className="binge_content">
        <div className="binge_name">Browse</div>
            <div className="binge_transition">
          
            <h6 className="binge_desc">Show of Every Genre</h6></div>
            </div>
      </div>

      <div className="image3_watch">
       <img className="browse_background-image"
        src={Watch}
        style={{objectPosition: "center top"}} />
        <div className="binge_content">
        <div className="binge_name">Watch</div>
            <div className="binge_transition">
          
            <h6 className="binge_desc">HGTV, Food Network, TLC, ID, Animal Planet, Discovery Channel, and more</h6></div>
            </div>
      </div>

      <div className="image4_find">
       <img className="browse_background-image"
        src={Find}
        style={{objectPosition: "center top"}} />
        <div className="binge_content">
        <div className="binge_name">Find</div>
            <div className="binge_transition">
          
            <h6 className="binge_desc">New Shows All The Time</h6></div>
            </div>
      </div>

      <div className="image5_stream">
       <img className="browse_background-image"
        src={Stream}
        style={{objectPosition: "center top"}} />
        <div className="binge_content">
        <div className="binge_name">Stream</div>
            <div className="binge_transition">
          
            <h6 className="binge_desc">BBC &amp; Natural History Collections</h6></div>
            </div>
      </div>

      <div className="image6_enjoy">
       <img className="browse_background-image"
        src={Enjoy}
        style={{objectPosition: "center top"}} />
        <div className="binge_content">
        <div className="binge_name">Enjoy</div>
            <div className="binge_transition">
          
            <h6 className="binge_desc">Your Favourite Celebrites</h6></div>
            </div>
      </div>

      <div className="image7_cant">
       <img className="browse_background-image"
        src={Cant}
        style={{objectPosition: "center top"}} />
        <div className="binge_content">
        <div className="binge_name">Can't Miss</div>
            <div className="binge_transition">
          
            <h6 className="binge_desc">Exclusive discovery+ Originals</h6></div>
            </div>
      </div>
       
    
     </div>
        </div>

     <div>
       <div className="small_icons_premium">
       <div class="inner_icons">
           <img src={Animal_planet} />
           <img src={Bbc} />
           <img src={Discov} />
           <img src={Kids_dis} />
           <img src={Sci} />
           <img src={Turbo} />
           <img src={DMAX} />
           <img src={Euro} />
           <img src={Hgtv} />
           <img src={Invest} />
           <img src={Tlc} />
           <img src={Trvl} />
           
      </div></div>
     </div>

     <div className="thousand_shows">
     <div className="thousand_inner"><span className="thousand_heading">Thousands of Premium Shows</span></div>
 
     </div>

     <div className="get_access_block">
     <div className="getaccess_inner"><span className="getaccess_heading">Get Access To discovery+ Exclusive Originals</span></div>
     <div >
         <img src={Access} className="access_image"  ></img>
     </div>
     </div>

     <div className="stream_prefered">
       <span className="stream_heading">Stream on your preferred devices from Android, iOS to Amazon Fire Stick and Android TV, Samsung TV and LG TV
        </span>
        <img className="cover_image_tv" src={Tv_stream}/>
     </div>

     <div className="stream_prefered">
       <span className="stream_heading">A Safe Place for Kids Entertainment and Learning
        </span>
        <img className="cover_image_safe" src={Safe}/>
     </div>

     <div className="premium_benefits">
     <div className="exclusive"><span className="exclu_heading">Exclusive Premium Benefits</span></div>
     </div>
     <div className="exclu_table">
       <div className="inner_table">
       <div className="table_row1">
               <div className="content">Content</div>
               <div className="free">Free</div>
               <div className="premium">
                   <div >Premium</div>
                   <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="premiumIcon"><path d="M19.4133 18.9235H4.58394L2 11.6643C3.11234 12.4426 4.44438 12.8814 5.85519 12.8814C8.66298 12.8814 10.8959 10.1193 11.9986 7.35428C13.1013 10.1193 15.3342 12.8814 18.1407 12.8814C19.5446 12.8814 20.8807 12.4368 22 11.6499L19.4133 18.9235ZM19.7877 21.7647H4.18322C3.81843 21.7647 3.52273 21.4554 3.52273 21.0497C3.52273 20.6699 3.81843 20.3621 4.18322 20.3621H19.7877C20.1525 20.3621 20.4482 20.6699 20.4482 21.077C20.4482 21.4554 20.1525 21.7647 19.7877 21.7647ZM12 6.16444C13.1046 6.16444 14 5.2322 14 4.08222C14 2.93224 13.1046 2 12 2C10.8954 2 9.99999 2.93224 9.99999 4.08222C9.99999 5.2322 10.8954 6.16444 12 6.16444ZM1.28571 10.9238C1.99579 10.9238 2.57143 10.3245 2.57143 9.58523C2.57143 8.84596 1.99579 8.24666 1.28571 8.24666C0.575634 8.24666 0 8.84596 0 9.58523C0 10.3245 0.575634 10.9238 1.28571 10.9238ZM22.7143 10.9238C23.4244 10.9238 24 10.3245 24 9.58523C24 8.84596 23.4244 8.24666 22.7143 8.24666C22.0042 8.24666 21.4286 8.84596 21.4286 9.58523C21.4286 10.3245 22.0042 10.9238 22.7143 10.9238Z" fill="#2789FF"></path></svg></div>
         </div>
        </div>
        <div className="table_row1">
               <div className="table_sub_content">Shorts</div>
               <div className="right_mark">
               <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon">
                   <path d="M2 6.5 6 11l10.5-9" stroke="#2789FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>
               </div>
               <div className="right_premium">
                   <div>
                   <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon">
                       <path d="M2 6.5 6 11l10.5-9" stroke="#2789FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                     </div>
         </div>
        </div>
        <div className="table_row1">
               <div className="table_sub_content">discovery+ Originals</div>
               <div className="wrong_mark">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon">
                   <path d="M6.002 6 18.34 18.34M18.339 6 6 18.338" stroke="#9BA1A9" stroke-width="3" stroke-linecap="round"></path></svg>
               </div>
               <div className="right_premium">
                   <div>
                   <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon">
                       <path d="M2 6.5 6 11l10.5-9" stroke="#2789FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                     </div>
         </div>
        </div>
        <div className="table_row1">
               <div className="table_sub_content">Unlimited &amp; exclusive BBC &amp; History Content
</div>
               <div className="wrong_mark">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon">
                   <path d="M6.002 6 18.34 18.34M18.339 6 6 18.338" stroke="#9BA1A9" stroke-width="3" stroke-linecap="round"></path></svg>
               </div>
               <div className="right_premium">
                   <div>
                   <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon">
                       <path d="M2 6.5 6 11l10.5-9" stroke="#2789FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                     </div>
         </div>
        </div>
        <div className="table_row1">
               <div className="table_sub_content">Live TV: India + International</div>
               <div className="wrong_mark">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon">
                   <path d="M6.002 6 18.34 18.34M18.339 6 6 18.338" stroke="#9BA1A9" stroke-width="3" stroke-linecap="round"></path></svg>
               </div>
               <div className="right_premium">
                   <div>
                   <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon">
                       <path d="M2 6.5 6 11l10.5-9" stroke="#2789FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                     </div>
         </div>
        </div>
        <div className="table_row1">
               <div className="table_sub_content">Best of Kids Shows</div>
               <div className="wrong_mark">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon">
                   <path d="M6.002 6 18.34 18.34M18.339 6 6 18.338" stroke="#9BA1A9" stroke-width="3" stroke-linecap="round"></path></svg>
               </div>
               <div className="right_premium">
                   <div>
                   <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon">
                       <path d="M2 6.5 6 11l10.5-9" stroke="#2789FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                     </div>
         </div>
        </div>
        <div className="table_row1">
               <div className="table_sub_content">Live Sports</div>
               <div className="wrong_mark">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon">
                   <path d="M6.002 6 18.34 18.34M18.339 6 6 18.338" stroke="#9BA1A9" stroke-width="3" stroke-linecap="round"></path></svg>
               </div>
               <div className="right_premium">
                   <div>
                   <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon">
                       <path d="M2 6.5 6 11l10.5-9" stroke="#2789FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                     </div>
         </div>
        </div>
        <div className="table_row2">
               <div className="table_sub_last">Ad Free Experience</div>
               <div className="wrong_mark_last">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon">
                   <path d="M6.002 6 18.34 18.34M18.339 6 6 18.338" stroke="#9BA1A9" stroke-width="3" stroke-linecap="round"></path></svg>
               </div>
               <div className="right_premium_last">
                   <div>
                   <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon">
                       <path d="M2 6.5 6 11l10.5-9" stroke="#2789FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                     </div>
         </div>
        </div>


       </div>
     </div>
    <div className="lower_subscribe">
   <div className="lower_blk">
       <div className="lower_b1inner">
        <h2 className="lower_title">₹</h2>
        <h2 className="lower_title">199</h2>
        <h2 className="lower_title">/</h2>
        <h2 className="lower_title">month</h2></div>
        <div className="lower_desc"><div className="lower_desc_inner"><div>
                <span ><div>Unlimited access to the greatest real-life entertainment plus exclusives and originals</div></span>
                </div></div></div>
                <div className="lower_btn"><button className="subs_lower_btn" id="#subscribeButton">Subscribe Now</button></div>
   </div>

   <div className="lower_blk">
       <div className="lower_b1inner">
        <h2 className="lower_title">₹</h2>
        <h2 className="lower_title">399</h2>
        <h2 className="lower_title">/</h2>
        <h2 className="lower_title">year</h2></div>
        <div className="lower_desc"><div className="lower_desc_inner"><div>
                <span ><div>Unlimited access to all that the monthly plan has to offer with</div></span>
                <span><div><strong>₹1000 in savings</strong></div></span>
                </div></div></div>
                <div className="lower_btn"><button className="subs_lower_btn" id="#subscribeButton">Subscribe Now</button></div>
   </div>
    </div>
     
     <div className="testimonnial"><div className="fFvlhF">
        <div className="testi_heading"><div className="testi_head_inner">User Testimonials</div></div>

        <div className="scrolling_feedback">
         


        </div>
     </div>
       
     </div>
    
    
    
    
    </div>
    </div>
    </>


}