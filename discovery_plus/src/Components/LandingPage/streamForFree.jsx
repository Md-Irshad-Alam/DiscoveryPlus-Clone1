// import styled from "styled-components"
import styled from "@emotion/styled";
import play from "./Homeimages/play.png"

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
    margin-top:3rem;
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
export const StreamForFree=()=>{
    return (
        <Toolbar>
        <h3 style={{ backgroundColor: "rgb(18,19,23)",paddingLeft:"4%", color:"white",fontSize:"larger",fontWeight:"bold" }}>Stream For Free Now</h3>
            <div style={{ backgroundColor: "rgb(18,19,23)", padding: "4%", paddingTop: "0px", paddingBottom: "2%" }} >
                <div className="row">
                    {
                        slider.map((e) => (
                            <div className="col col-4  g-3 col-lg-2 col-xl-2" key={e.id} >
                                <div className="card" style={{border:"none" }}>
                                    <img style={{borderRadius: "5px",height:"250px"}} src={e.img} classname="img-fluid" alt="" />
                                    {/* <p >{e.text}</p> */}
                                    <div className="overlay1" style={{ padding: "1%" }}>
                                    <img className='centered' src={play} alt="" style={{ maxwidth: "45px", maxHeight: "45px" }} />
                                    <div className="row mb-0 pb-0">
                                        <h5 className='mb-0 tit smooth' >{e.title}</h5>
                                    </div>

                                    <div className="row">
                                        <div className="col-10">
                                            <p className="float-start" style={{ color: "#abafb4" }} aria-current="page" >{e.description}</p>
                                        </div>
                                        <div className="col-2">
                                        <i class="fa-regular fa-heart" onClick={() => {
                                            

                                            }}></i>
                                        </div>
                                    </div>





                                           
                                    </div>
                                    </div>



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
    img: "https://ap2-prod-images.disco-api.com/2022/12/21/e290d56d-ff1b-4aee-83ad-06f751c807d4.jpeg?bf=0&f=jpg&p=true&q=85&w=600",

},
{
    id: 2,
    img: "https://ap2-prod-images.disco-api.com/2022/12/06/ff00ee74-a71f-4174-a87a-3335cfb2670a.jpeg?bf=0&f=jpg&p=true&q=85&w=600",

},
{
    id: 3,
    img: "https://ap2-prod-images.disco-api.com/2022/11/08/af2d3c2f-45ab-4eae-a317-d035a972239c.jpeg?bf=0&f=jpg&p=true&q=85&w=600",

},
{
    id: 4,
    img: "https://ap2-prod-images.disco-api.com/2020/09/10/651f18ec-6098-46ba-8483-a64de9730429.jpeg?bf=0&f=jpg&p=true&q=85&w=600",

},
{
    id: 5,
    img: "https://ap2-prod-images.disco-api.com/2022/04/12/3b235cd3-71aa-442a-b0e2-acc9602ae6fe.jpeg?bf=0&f=jpg&p=true&q=85&w=600",

},
{
    id: 6,
    img: "https://ap2-prod-images.disco-api.com/2022/11/25/eca6ebce-6669-4cfb-afc8-da3d87fc668a.jpeg?bf=0&f=jpg&p=true&q=85&w=600",

}
]

