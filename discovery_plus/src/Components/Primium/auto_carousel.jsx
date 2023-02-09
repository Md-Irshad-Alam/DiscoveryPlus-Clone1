import React from "react";
import Say_yes from "../Images/say_yes_premi.jpeg";
import Haunt from "../Images/haunting_premi.jpeg";
import Battle from "../Images/battle_premi.jpeg";
import American from "../Images/american.jpeg";
import Serena from "../Images/being_serena.jpeg";
import "./auto_caro.css";




export const Slideshow = () => {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

const first = 
<div className="thsnd_container">
  <div className="style_nextItem">
    <div className="thousand_contant">
      <div className="fbzSf">
        <div className="thsd_text">
          <span className="being_heading">Being Serena</span>
          <div className="being_desc">Serena Williams's journey from Motherhood to supremacy on the court.</div>
        
           
        </div></div>
              <div className="sliding_image">
               <img className="cover_sliding" src={Serena}/>
        </div> </div></div>
</div>

const second = <div className="thsnd_container">
  <div className="style_nextItem">
    <div className="thousand_contant">
      <div className="fbzSf">
        <div className="thsd_text">
          <span className="being_heading">Say Yes To The...</span>
            <span className="being_desc">Dress India 16 Indian brides-to-be hunt for their perfect dress with family & top talent.</span>
        </div></div>
              <div className="sliding_image">
               <img className="cover_sliding" src={Say_yes}/>
        </div> </div></div>
</div>

const third = <div className="thsnd_container">
  <div className="style_nextItem">
    <div className="thousand_contant">
      <div className="fbzSf">
        <div className="thsd_text">
          <span className="being_heading">American Chopper</span>
            <span className="being_desc">The Teutuls are back and Sr. and Jr. forge ahead with their own shops.</span>
        </div></div>
              <div className="sliding_image">
               <img className="cover_sliding" src={American}/>
        </div> </div></div>
</div>

const fourth = <div className="thsnd_container">
  <div className="style_nextItem">
    <div className="thousand_contant">
      <div className="fbzSf">
        <div className="thsd_text">
          <span className="being_heading">Battle Ops</span>
            <span className="being_desc">India's iconic military operations are deciphered and depicted.</span>
        </div></div>
              <div className="sliding_image">
               <img className="cover_sliding" src={Battle}/>
        </div> </div></div>
</div>

const fifth = <div className="thsnd_container">
  <div className="style_nextItem">
    <div className="thousand_contant">
      <div className="fbzSf">
        <div className="thsd_text">
          <span className="being_heading">A Haunting</span>
            <span className="being_desc">Eyewitnesses share their terrifying true tales of the paranormal.</span>
        </div></div>
              <div className="sliding_image">
               <img className="cover_sliding" src={Haunt}/>
        </div> </div></div>
</div>

  const colors = [first, second, third, fourth, fifth];
  const delay = 10000;


  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
<div>

    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((index) => (
          <div
            className="slide"
          >{index}</div>
        ))}
      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
    </div>
  );
}
