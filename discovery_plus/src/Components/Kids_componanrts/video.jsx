import React from 'react'
import { Link } from 'react-router-dom'
import style from "./KIDS_css/Screen.css"
import style2 from "./KIDS_css/premium.css"

function Video() {
    let {data} =JSON.parse(localStorage.getItem("Clicked"))|| []
   
    
  return (
    <div className='Image_container bg-plus_back'>
       
    
    <div className='Inner_container'>
    <Link to='/videopremium'>
        <div className="image_container ">
                <img src={data.img} alt="" className="w-full h-4/6 flex items-center justify-center m-auto" />
            </div>
        </Link>
        <div className='flex justify-between relative Tittle_bar'>
            <div className=' flex text-white text-4xl gap-2 items-center'>
            <i class="fa-solid fa-crown text-2xl bg-sky-600 w-8 h-8 p-0 rounded-1 bg-hex flex justify-center"/>
                <p className='text-base'>{data.title}</p>
                <br />
            </div>
            <div className='flex flex-wrap font-semibold items-center gap-2 text-gray-400 Share_button'>
               <div className=' flex items-center px-3 border text-gray-400 gap-2 '>
                    <i class="fa-solid fa-share-nodes"/>
                    <p>Share</p>

             <div className='style_share'>  
                <div className="pADKZ6">
                        <div className="overlay_icons">
                            <div id="#facebook">
                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" className="icons_ofshare"><g fill="none" fill-rule="evenodd"><g><g><g>
                                    <path fill="#3B5998" d="M0 0H34V34H0z" transform="translate(-459 -1179) translate(326 661) translate(133 518)"></path>
                                    <path fill="#FFF" d="M14.652 26.152h3.303v-9.071h2.477l.49-2.835h-2.967v-2.054c0-.662.428-1.357 1.04-1.357h1.687V8h-2.067v.013c-3.235.117-3.9 1.99-3.957 3.958h-.006v2.275H13v2.835h1.652v9.071z" transform="translate(-459 -1179) translate(326 661) translate(133 518)"></path></g></g></g></g>
                                </svg>
                            </div>
                            <div id="#twitter">
                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" className="icons_ofshare"><g fill="none" fill-rule="evenodd"><g><g><g><g>
                                    <path fill="#55ACEE" d="M0 0H34V34H0z" transform="translate(-494 -1179) translate(326 661) translate(133 518) translate(35)"></path>
                                    <path fill="#FFF" d="M25.765 10.33c-.531.34-1.751.835-2.353.835-.687-.717-1.654-1.165-2.726-1.165-2.083 0-3.773 1.69-3.773 3.772 0 .289.034.571.096.842-2.826-.074-5.917-1.49-7.777-3.915-1.144 1.98-.154 4.182 1.144 4.984-.445.034-1.263-.05-1.648-.426-.025 1.314.606 3.055 2.91 3.687-.443.238-1.229.17-1.57.119.12 1.11 1.673 2.56 3.372 2.56-.606.7-2.884 1.97-5.44 1.566 1.736 1.056 3.76 1.668 5.901 1.668 6.086 0 10.813-4.932 10.558-11.017l-.001-.02.001-.048-.002-.056c.554-.378 1.298-1.049 1.829-1.93-.308.169-1.232.508-2.092.593.552-.298 1.37-1.274 1.571-2.05" transform="translate(-494 -1179) translate(326 661) translate(133 518) translate(35)"></path></g></g></g></g></g>
                                </svg>
                            </div>
                            <div class="styles-copyLink-gK2TbP4i" id="#clipboard">
                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" className="icons_ofshare"><g fill="none" fill-rule="evenodd"><g><g><g><g>
                                    <path fill="#59A015" d="M0 0H34V34H0z" transform="translate(-529 -1179) translate(326 661) translate(133 518) translate(70)"></path>
                                    <path fill="#FFF" fill-rule="nonzero" d="M17.278 14.15c1.148 0 2.232.446 3.04 1.254l2.423 2.487c1.679 1.68 1.679 4.4 0 6.08-.85.828-1.935 1.253-3.04 1.253s-2.21-.425-3.04-1.254l-.786-.786c-.34-.34-.34-.872 0-1.212.34-.34.872-.34 1.212 0l.786.787c1.02 1.02 2.657 1.02 3.677 0s1.02-2.657 0-3.678l-2.444-2.444c-.489-.489-1.148-.765-1.828-.765-.68 0-1.34.276-1.828.765l-.893.893c-.34.34-.871.34-1.211 0-.34-.34-.34-.872 0-1.212l.892-.914c.808-.808 1.892-1.254 3.04-1.254zm-7.869-3.048c1.688-1.52 4.288-1.468 5.913.157l.787.787c.34.34.34.871 0 1.211-.34.34-.872.34-1.212 0l-.786-.786c-1-1-2.636-1-3.656 0l-.127.136c-.891 1.025-.849 2.565.127 3.541l2.444 2.423c.49.49 1.127.765 1.828.765.68 0 1.34-.276 1.828-.765l.893-.892c.34-.34.871-.34 1.212 0 .34.34.34.871 0 1.211l-.893.893c-.808.808-1.892 1.254-3.04 1.254-1.147 0-2.231-.446-3.04-1.254l-2.444-2.466c-1.657-1.658-1.657-4.378 0-6.058z" transform="translate(-529 -1179) translate(326 661) translate(133 518) translate(70)"></path></g></g></g></g></g>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
               </div>
               <div className=' flex items-center px-3 border text-gray-400 gap-2 '>
                    <i class="fa-regular fa-heart"/>
                    <p> Favorite</p>
               </div>
            </div> 
        </div>
        <br />
        <div className='flex justify-between  box-border WatchNow_bottom '>
            <div className='flex text-gray-400 gap-2 items-center '>
                
                <div className='h-2 w-2 rounded-2 bg-gray-400'></div>
                    <p>Kids</p>
                <div className='h-2 w-2 rounded-2 bg-gray-400'></div>
                     <p>Animated</p>
            </div>
            <div className='flex gap-2 text-gray-400 flex-wrap  '>
               <h4>Language</h4>
               <div>Telugu</div>
               <div>Malayalam</div>
               <div>Hindi</div>
               <div>Kannada</div>
               <div>Tamil</div>
            </div>
        </div>
        <br />
        <div className='botton_watch_Now'>
           <Link to="/videopremium">
           <div className='watch_button'>
                <button className='text-white flex px-2  py-1 gap-2 items-center  bg-sky-600 rounded-2 '><i class="fa-solid fa-play text-2xl  bg-sky-600"/> Watch Now</button>
            </div>
           </Link>
        <div className='age_rating'>
            <div className='mb-1 mt-1'>
                <p className='text-gray-400'>{data.dis}</p>
            </div>

            <div className='text-gray-400'>
                <p>Age Rating : U | ontains : Suitable for All Ages</p>
            </div>
        </div>
        </div>
    </div> 


    
    </div>
  )
}

export default Video
