import {Player, ControlBar, PlayToggle} from 'video-react';
const ShortVideo = () => {
  const Videourl=[
    {
      id:1,
      url:"https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
    },
    {
      id:2,
      url:"http://mirrorblender.top-ix.org/movies/sintel-1024-surround.mp4",
    },
    {
      id:3,
      url:"http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4"
    },
  ]
  return(
        <Player fluid={false} width="100%" height={1000} autoPlay disableDefaultControls={true}
                          poster="/assets/poster.png"
                          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                        >
        </Player>                      
    
  )
}
export default ShortVideo;