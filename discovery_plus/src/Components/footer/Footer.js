import styled from 'styled-components' 
const Footercss = styled.div`
p {
    font-size: 13px;
    margin-bottom:8px!important
}
#footer {
 background: rgb(18,19,23);
 padding: 10px;
 color:#838991!important;
 padding:1% 4% 0% 4%;
 margin:1% 0% 0% 0%
}
#top_content {
    justify-content: space-between;
    @media (max-width: 1080px) {
        flex-direction: column;
      }
}
.logos {
    margin-right: 15px;
    height: 50%;
}
.logos2 {
    margin-right: 10px;
    padding-right:10px;
}
.flex_wrapper {
    display: flex
}
.right_content {
    p {
        margin-bottom: 3px;
    }
}
#bottom_content {
    margin-top: 20px;
    p {
        margin-bottom: 0px;
        margin-right: 15px;
    }
}
#top_right {
    @media (max-width: 457px) {
        flex-direction: column;
      }
}
.top_left {
    img {
        @media (max-width: 550px) {
            margin-top: 10px;
        }
    }
}
.none{
    @media (max-width: 850px) {
          display:none
        }
}
p:hover{
    color:white !important
}
`
export const Footer = () => {
    return (
        <Footercss>
            <div id="footer" className="logos mt-0">
                <div id="top_content" className="flex_wrapper">
                    <div className="top_left" >
                        <div className="flex_wrapper">
                            <img className="logos" src="mail.png" />
                            <p>hello@discovery.com</p>
                        </div>
                        <div className="flex_wrapper">
                            <img className="logos" src="calllogo.png" />
                            <p className='ps-1'>022-43491100 +91-8433774761 (Mon-Fri, excluding Holidays 11am-4pm)</p>
                        </div>
                        <div className="flex_wrapper">
                            <img className="logos" src="discoveryicon.png" />
                            <p>Discovery India, 5th Floor, WeWork BKC, C20 G Block, Bandra Kurla Complex, Mumbai 400051</p>
                        </div>
                    </div>
                    <div  id="top_right" className="flex_wrapper">
                        <div className = "right_content">
                            <p>Follow Us</p>
                            <div className="flex_wrapper">
                                <img className="logos2" src="YOUTUBE.png" />
                                <img className="logos2" src="FB.png" />
                            </div>
                        </div>

                        <div className = "right_content">
                            <p>discovery+ App</p>
                            <div className="flex_wrapper none">
                                <img className="logos2" src="Appstore.png" />
                                <img className="logos2" src="Googleplay.png" />
                            </div>
                        </div>
                    </div>
                </div>
                <div id="bottom_content">
                    <div>
                        <div className="flex_wrapper">
                            <p>Advertising Services Terms & conditions</p>
                            <p>Online Advertising Order</p>
                            <p>Support</p>
                        </div>
                    </div>
                    <div>
                        <hr />
                    </div>
                    <div>
                        <div className="flex_wrapper">
                            <p>Privacy Policy</p>
                            <p>Terms of Use</p>
                            <p>FAQ's</p>
                        </div>
                    </div>
                </div>
            </div>
        </Footercss>
    )
}
