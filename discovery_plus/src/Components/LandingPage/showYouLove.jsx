import styled from "@emotion/styled"
import play from "./Homeimages/play.png"
import { Link } from "react-router-dom";
const Toolbar = styled.header`
.card{
    position: relative;
  text-align: center;
  color: white;
}
.overlay1 {
 
 position: absolute; 
 bottom: 0; 
 background: rgb(0, 0, 0);
 background: rgba(0, 0, 0, 0.5); /* Black see-through */
 color: #f1f1f1; 
 width: 100%;
 transition: .5s ease;
 opacity:0;
 height:100%;
 color: white;
 padding:10px;
}
.card:hover .overlay1 {
 opacity: 1;
 
}
.card:hover 
 .btn-primary{
    display:none
 
}
.img-fluid {
  display: block;
  width: 100%;
  height: auto;
}
.centered {
  position: absolute;
  max-width:"5px";
  max-height:"5px";
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media all and (max-width:500px){   
      width:30px;
      height:30px
   } ,
   @media all and (max-width:350px){   
      width:20px;
      height:20px
   } 
}
.row{
    position: relative;
  top: 70%;
  left: 0%;
  @media all and (max-width:984px){   
    top: 78%;
  left: 0%;
   } 
}
.col-2{
    align-text:center;
    @media all and (max-width:576px){   
     display:none
   } 
}
.col-10 {
    white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis;
}

  p{
  position: absolute;
  font-size:1.330vw;
  top: 79%;
  weight:500;
  left: 50%;
  transform: translate(-50%, -50%);

  }`
export const ShowYouLove=()=> {
    return (
        <Toolbar>
        <h3 style={{ backgroundColor: "rgb(18,19,23)",paddingLeft:"4%", color:"white",fontSize:"larger",fontWeight:"bold" }}>Shows You Love</h3>
            <div style={{ backgroundColor: "rgb(18,19,23)", padding: "4%", paddingTop: "0px", paddingBottom: "2%" }} >
                <div className="row">
                    {
                        slider.map((e) => (
                            <div className="col col-4  g-3 col-lg-2 col-xl-3" key={e.id} >
                            <Link to="/Shows_You_Love" style={{textDecoration:"none"}}> 
                               <div className="card" style={{border:"none" }}   >
                                    <img style={{borderRadius: "5px"}} src={e.img} classname="img-fluid" alt="" />
                                  
                                    <div className="overlay1" style={{ padding: "1%" }}>
                                    <img className='centered' src={play} alt="" style={{ maxwidth: "45px", maxHeight: "45px" }} onClick={() => {
                                       localStorage.setItem("showYouLove", JSON.stringify(e));
                                     }}  />
                                    <div className="row mb-0 pb-0">
                                        <h5 className='mb-0 tit smooth' >{e.title}</h5>
                                    </div>

                                    <div className="row">
                                        <div className="col-10">
                                            <p className="float-start" style={{ color: "#abafb4" }} aria-current="page" >{e.dis}</p>
                                        </div>
                                        <div className="col-2">
                                        <i class="fa-regular fa-heart"></i>
                                        </div>
                                    </div>      
                                    </div>
                                    </div>
                                </Link>
                                    {/* ========================= */}
                                </div>
                          
                        ))
                    };
                </div>
               
            </div>
        </Toolbar>
    )
}
const slider = [{
    id: 1,
    img: "https://ap2-prod-images.disco-api.com/2022/09/25/b229caa5-fbb3-426f-af07-69ada1246b5c.jpeg?bf=0&f=jpg&p=true&q=85&w=600",
    title:"Little Singham",
    dis:"A nine-year-old boy battles evil villa.."
},
{
    id: 2,
    img: "https://ap2-prod-images.disco-api.com/2022/11/09/8c94e362-2a17-4587-a9db-2d5fa6549f9e.jpeg?bf=0&f=jpg&p=true&q=85&w=600",
    title:"Money Mafia",
    dis:"Eight of the most shocking con.."
},
{
    id: 3,
    img: "https://ap2-prod-images.disco-api.com/2022/08/18/8accb6b7-de88-42b9-a129-bcf6107350b5.jpeg?bf=0&f=jpg&p=true&q=85&w=600",
    title:"Secrets of the Koh-i-noor",
    dis:"Follow the journey of the worl.."
},
{
    id: 4,
    img: "https://ap2-prod-images.disco-api.com/2021/08/24/d285028a-f3c8-440e-bb38-3565f6425960.jpeg?bf=0&f=jpg&p=true&q=85&w=600",
    title:"Mumbai Railway",
    dis:"Four presenters commute Mumbai.."
}
]

