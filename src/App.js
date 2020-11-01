import React, { useRef, useEffect, useState } from 'react';
import { TweenMax, Power3 } from "gsap";
import './App.css';
function App() {
  let app = useRef(null)
  let circle = useRef(null)
  let circleRed = useRef(null)
  let eye = useRef(null)
  let star = useRef(null)
  let circleBlue = useRef(null)
  let smile = useRef(null)

  const [state, setState] = useState(false)

  const handleExpand = () => {
    TweenMax.to(circle, .8, {width:200, height:200, ease:Power3.easeInOut})
    TweenMax.to(eye, .8 ,  {
      scaleY: 0.2,
      ease: Power3.easeInOut,delay:0.1
  })
  TweenMax.to(star, .8 ,  {
    scale: 3,
    ease: Power3.easeInOut
})
TweenMax.to(smile, .8, {borderRadius: '0 0 8px 8px', ease:Power3.easeInOut,delay:0.1})
    setState(true)
  }
  const handleShrink = () => {
    TweenMax.to(circle, .8, {width:75, height:75, ease:Power3.easeInOut})
    TweenMax.to(eye, .8 ,  {
      scaleY: 1,
      ease: Power3.easeInOut
  })
  TweenMax.to(star, .8 ,  {
    scale: 1,
    ease: Power3.easeInOut
})
TweenMax.to(smile, .8, {borderRadius: '8px 8px 0 0', ease:Power3.easeInOut})
    setState(false)
  }

  useEffect(() => {
    TweenMax.to(app, 0, {css: {visibility: 'visible'}});
    //  TweenMax.from(circleBlue, .8, {opacity:0, x:40, ease: Power3.easeOut})
    //  TweenMax.from(circle, .8, {opacity:0, x:40, ease: Power3.easeOut, delay:0.2})
    //  TweenMax.from(circleRed, .8, {opacity:0, x:40, ease: Power3.easeOut, delay:0.4})
    TweenMax.staggerFrom([circle, circleBlue, circleRed], .8,  {opacity:0, x:40, ease: Power3.easeOut}, .2)

  }, []);

  return (
      <div className="App" ref={el => app = el} >
            <header  className="App-header">
                <div className="circle-container">
                    <div ref={el => circleBlue = el} 
                    className="circle blue">
                      <div class="star">
                          <div class="eye" ref={el => eye = el}></div>
                          <div className ="smile"></div>
                      </div>
                    </div>
                    <div ref={el => circle = el}  
                    onClick={state !== true ? handleExpand : handleShrink}
                    className="circle">
                      <div class="star" ref={el => star = el}>
                          <div class="eye" ref={el => eye = el}></div>
                          <div className ="smile" ref={el => smile = el}></div>
                      </div>
                    </div>
                    <div ref={el => circleRed = el}  
                    className="circle red">
                       <div class="star">
                          <div class="eye"></div>
                          <div className ="smile"></div>
                      </div>
                    </div>
                </div>
            </header>
          
          
      </div>
  );
  
}

export default App;
