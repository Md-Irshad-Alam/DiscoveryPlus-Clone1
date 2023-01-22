import React from "react"

import play from "./Homeimages/play.png"
import { Link } from "react-router-dom"

import { useState, useEffect } from 'react';


 export const Corosuel=()=> {
 
 
 
const slider = [{
  
    title: "Secrets of the Koh-i-noor",
    description:"Follow the journey of the world's most fabled diamond with Manoj Bajpayee.",
    image_url: "https://ap2-prod-images.disco-api.com/2022/08/18/8accb6b7-de88-42b9-a129-bcf6107350b5.jpeg?bf=0&f=jpg&p=true&q=85&w=700",
   
},
{
   title: "Ekaant Sarhad Paar",
     description:"Akul Tripathi ventures to Sri Lanka to discover the Ekaant of Sigiriya.",
    image_url: "https://ap2-prod-images.disco-api.com/2022/11/18/ff8aa059-1019-4837-a551-b33644937f73.jpeg?bf=0&f=jpg&p=true&q=85&w=700",
    text: "History"
},
{
    title: "HERO I-LEAGUE Football 2022-23",
    description:"Stream LIVE matches and replays from HERO I-LEAGUE Football 2022-23",
    image_url: "https://ap2-prod-images.disco-api.com/2022/11/11/858326a7-4a59-46e7-8ec9-2889958b407a.jpeg?bf=0&f=jpg&p=true&q=85&w=700",
 
},
{
   title: "Build India",
    description:"Uncover how transformative infrastructure sweeping the Indian nation.",
    image_url: "https://ap2-prod-images.disco-api.com/2022/12/21/e290d56d-ff1b-4aee-83ad-06f751c807d4.jpeg?bf=0&f=jpg&p=true&q=85&w=700",
   
},
]


  
  return (
   
    <div style={{ backgroundColor: "rgb(18,19,23)", padding: "4%", paddingTop: "0px", paddingBottom: "0px" }}>
      <div id="carouselExampleCaptions" className="carousel slide " data-bs-ride="carousel" style={{ backgroundColor: "rgb(18,19,23)", padding: "4%", paddingTop: "0px", paddingBottom: "0px" }} >
        <div className="carousel-inner" style={{ padding: "3%" }}>
          <div className="carousel-item active">
            <div className="row">
              <div className="col-4">
                <h1 className='non mt-3 text-white fs-1'  ><strong>{slider[0].title}</strong></h1>
                 <p className="non card-text mb-0 py-1" style={{ color: "#838991", fontSize: "18px" }}>{slider[0]?.description}</p>
                <div className="non btn-group mt-3" role="group" aria-label="Basic example">
                  <button type="button" className="btn btn-secondary btn-sm py-0 mx-1" style={{ backgroundColor: "rgb(40,46,61)", color: "#b6bbc0", fontSize: "12px",maxWidth:"120px"}}>Trending</button>
                  <button type="button" className="btn btn-secondary btn-sm py-0 mx-1" style={{ backgroundColor: "rgb(40,46,61)", color: "#b6bbc0", fontSize: "12px",maxWidth:"120px" }}>Recommanded</button>
                </div>
                <Link to="/watch" style={{textDecoration:"none"}}>
                  <div className='pt-4'>

                    <img className='play' src={play} alt="" style={{ maxWidth: "65px", maxHeight: "65px" }} /><span className='px-3' style={{ color: "#ffffff", fontSize: "18px" }}
                      onClick={() => {
                        localStorage.setItem("showData", JSON.stringify(slider[0]));
                      }}>Play</span>
                  </div> </Link>
              </div>
              <div className="col-12 col-lg-8">
              <Link to="/watch" style={{textDecoration:"none"}}>
                  <img style={{ borderRadius: "10px" }} src={slider[0].image_url} className="d-block w-100" alt="..."  onClick={() => {
                         localStorage.setItem("showData", JSON.stringify(slider[0]));
                      }}/>
                </Link>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-4">
                <h1 className='non mt-3 text-white fs-1'> <strong>{slider[1].title}</strong></h1>
                <p className="non card-text mb-0 py-1" style={{ color: "#838991", fontSize: "18px" }}>{slider[0]?.description}</p>
                <div className=" non btn-group mt-3" role="group" aria-label="Basic example">
                  <button type="button" className="btn btn-secondary btn-sm py-0 mx-1 btn-sm" style={{ backgroundColor: "rgb(40,46,61)", color: "#b6bbc0", fontSize: "12px" ,maxWidth:"120px"}}>Trending</button>
                  <button type="button" className="btn btn-secondary btn-sm py-0 mx-1 btn-sm" style={{ backgroundColor: "rgb(40,46,61)", color: "#b6bbc0", fontSize: "12px" ,maxWidth:"120px"}}>Recommanded</button>
                </div>
                <Link to="/watch" style={{textDecoration:"none"}}>
                  <div className='pt-4'>
                    <img className='play' src={play} alt="" style={{ maxWidth: "65px", maxHeight: "65px" }} /><span className='px-3' style={{ color: "#ffffff", fontSize: "18px" }}
                      onClick={() => {
                        localStorage.setItem("showData", JSON.stringify(slider[1]));
                      }}>Play</span>
                  </div>
                </Link>
              </div>
              <div className="col-12 col-lg-8">
                <Link to="/watch" style={{textDecoration:"none"}}>
                  <img style={{ borderRadius: "10px" }} src={slider[1].image_url} className="d-block w-100" alt="..."  onClick={() => {
                      localStorage.setItem("showData", JSON.stringify(slider[1]));
                      }}/>

                </Link>
              </div>
            </div>


          </div>

          <div className="carousel-item">
            <div className="row">
              <div className="col-4">
                <h1 className='non mt-3 text-white fs-1'> <strong>{slider[2].title}</strong></h1>
                <p className="non card-text mb-0 py-1" style={{ color: "#838991", fontSize: "18px" }}>{slider[0]?.description}</p>
                <div className="non btn-group mt-3" role="group" aria-label="Basic example">
                  <button type="button" className="btn btn-secondary btn-sm py-0 mx-1" style={{ backgroundColor: "rgb(40,46,61)", color: "#b6bbc0", fontSize: "12px",maxWidth:"120px" }}>Trending</button>
                  <button type="button" className="btn btn-secondary btn-sm py-0 mx-1" style={{ backgroundColor: "rgb(40,46,61)", color: "#b6bbc0", fontSize: "12px" ,maxWidth:"120px"}}>Recommanded</button>
                </div>
                <Link to="/watch" style={{textDecoration:"none"}}>
                  <div className='pt-4'>
                    <img className='play' src={play} alt="" style={{ maxWidth: "65px", maxHeight: "65px" }} /><span className='px-3' style={{ color: "#ffffff", fontSize: "18px" }}
                      onClick={() => {
                        localStorage.setItem("showData", JSON.stringify(slider[2]));
                      }}>Play</span>
                  </div>
                </Link>

              </div>
              <div className="col-12 col-lg-8">
                <Link to="/watch" style={{textDecoration:"none"}}>
                  <img style={{ borderRadius: "10px" }} src={slider[2]?.image_url} className="d-block w-100" alt="..."  onClick={() => {
                      localStorage.setItem("showData", JSON.stringify(slider[2]));
                      }}/>
                </Link>
              </div>
            </div>

          </div>

          <div className="carousel-item">
            <div className="row">
              <div className="col-4">
                <h1 className='non mt-3 text-white fs-1'> <strong>{slider[3]?.title}</strong></h1>
                <p className="non card-text mb-0 py-1" style={{ color: "#838991", fontSize: "18px" }}>{slider[3]?.description}</p>
                <div className="non btn-group mt-3" role="group" aria-label="Basic example">
                  <button type="button" className="btn btn-secondary btn-sm py-0 mx-1" style={{ backgroundColor: "rgb(40,46,61)", color: "#b6bbc0", fontSize: "12px",maxWidth:"120px" }}>Trending</button>
                  <button type="button" className="btn btn-secondary btn-sm py-0 mx-1" style={{ backgroundColor: "rgb(40,46,61)", color: "#b6bbc0", fontSize: "12px",maxWidth:"120px" }}>Recommanded</button>
                </div>
                <Link to="/watch" style={{textDecoration:"none"}}>
                  <div className='pt-4'>

                    <img className='play' src={play} alt="" style={{ maxWidth: "65px", maxHeight: "65px" }} /><span className='px-3' style={{ color: "#ffffff", fontSize: "18px" }}
                      onClick={() => {
                        localStorage.setItem("showData", JSON.stringify(slider[3]));
                      }}>Play</span>
                  </div>
                </Link>
              </div>
              <div className="col-12 col-lg-8">
                <Link to="/watch" style={{textDecoration:"none"}}>
                  <img style={{ borderRadius: "10px" }} src={slider[3]?.image_url} className="d-block w-100" alt="..."  onClick={() => {
                        localStorage.setItem("showData", JSON.stringify(slider[3]));
                      }}/>

                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='row p-4'>
          <div className="carousel-indicators col-2 mx-0" >
            <button style={{ maxWidth: "10px", height: "10px", borderRadius: "50%" }} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active dot" aria-current="true" aria-label="Slide 1"></button>
            <button className='dot' style={{ maxWidth: "10px", height: "10px", borderRadius: "50%" }} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button className='dot' style={{ maxWidth: "10px", height: "10px", borderRadius: "50%" }} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button className='dot' style={{ maxWidth: "10px", height: "10px", borderRadius: "50%" }} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
          </div>
          <div className="col-10"></div>
        </div>
        <button className="carousel-control-prev" style={{ maxWidth: "5%",marginTop:"50px" }} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next " style={{ maxWidth: "5%",marginTop:"50px" }} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
 

)
}


