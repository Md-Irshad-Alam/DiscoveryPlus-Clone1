import React from 'react'

const HomevedioPlay = () => {
    let data =JSON.parse(localStorage.getItem("showYouLove"))|| []
    // console.log(data);
  return (
    <div className='Image_container'>
    <div className=''>
            <div className="image_cont">
            <img src={data.img} alt=""  className=''/>
            </div>
        <div className='flex justify-between relative'>
            <div className=' flex text-white text-4xl gap-2 items-center'>
            <i class="fa-solid fa-crown text-2xl bg-sky-600 w-8 h-8 p-0 rounded-1 bg-hex flex justify-center"/>
                <h1>{data.title}</h1>
                <br />
            </div>
            <div className='flex items-center gap-2 text-gray-400'>
               <div className=' flex items-center px-3 border text-gray-400 gap-2 '>
                    <i class="fa-solid fa-share-nodes"/>
                    <p>Share</p>
               </div>
               <div className=' flex items-center px-3 border text-gray-400 gap-2 '>
                    <i class="fa-regular fa-heart"/>
                    <p> Favorite</p>
               </div>
            </div> 
        </div>
        <br />
        <div className='flex justify-between  box-border'>
            <div className='flex text-gray-400 gap-2 items-center'>
                
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
        <div>
            <div className=''>
                <button className='text-white flex px-2  py-1 gap-2 items-center  bg-sky-600 rounded-2 '><i class="fa-solid fa-play text-2xl  bg-sky-600"/> Watch Now</button>
            </div>
            <div className='mb-1 mt-1'>
                <p className='text-gray-400'>{data.dis}</p>
            </div>

            <div className='text-gray-400'>
                <p>Age Rating : U | ontains : Suitable for All Ages</p>
            </div>
        </div>
    </div>
</div>
)
}

export default HomevedioPlay
