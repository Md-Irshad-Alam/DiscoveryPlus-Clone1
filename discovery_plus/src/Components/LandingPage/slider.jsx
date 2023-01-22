import styled from "@emotion/styled"
const Toolbar = styled.header`
.card{
    position: relative;
  text-align: center;
  color: white;
}
  p{
  position: absolute;
  font-size:1.330vw;
  top: 79%;
  weight:500;
  left: 50%;
  transform: translate(-50%, -50%);

  }`
export const Slider=()=> {
    return (
        <Toolbar>
            <div style={{ backgroundColor: "rgb(18,19,23)", padding: "4%", paddingTop: "0px", paddingBottom: "2%" }} >
                <div className="row">
                    {
                        slider.map((e) => (
                            <div className="col col-4  g-3 col-lg-2 col-xl-2" key={e.id} >
                                <div className="card" style={{ borderRadius: "10px",border:"none" }}>
                                    <img style={{ borderRadius: "10px" }} src={e.img} classname="img-fluid" alt="" />
                                    <p >{e.text}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </Toolbar>
    )
}
const slider = [{
    id: 1,
    img: "https://ap2-prod-images.disco-api.com/2021/03/01/2a76ce95-fdcc-492d-b78e-42932a724e0f.jpeg?w=600&p=true&q=75",
    text: "Adventure"
},
{
    id: 2,
    img: "https://ap2-prod-images.disco-api.com/2021/03/01/d35919b6-0146-457d-b48e-ac101c134111.jpeg?w=600&p=true&q=75",
    text: "Science"
},
{
    id: 3,
    img: "https://ap2-prod-images.disco-api.com/2021/03/01/c7f3d702-f0a8-40e3-958c-955a9180affc.jpeg?w=1200&p=true&q=75",
    text: "History"
},
{
    id: 4,
    img: "https://ap2-prod-images.disco-api.com/2021/07/01/58001170-51ce-474e-8dda-70f97c5a74f4.jpeg?w=1200&p=true&q=75",
    text: "Free Watch"
},
{
    id: 5,
    img: "https://ap2-prod-images.disco-api.com/2021/04/23/6ac7cb1d-1d65-47bd-8df1-af2fba730f82.jpeg?w=1200&p=true&q=75",
    text: "Inspiration"
},
{
    id: 6,
    img: "https://ap2-prod-images.disco-api.com/2021/04/16/0063fb3a-2b5f-416f-b7b1-e526bf4c1b37.jpeg?w=1200&p=true&q=75",
    text: "Lifestyle"
},
,
]

