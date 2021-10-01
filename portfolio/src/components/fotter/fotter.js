
import './fotter.css';
import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import animate from 'lottie-web';


const Fotter = () => {

    const container = useRef(null);
    useEffect(() => {
        Lottie.loadAnimation({
          container: container.current,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: require('./bottom.json'),
        });
        animate.setSpeed(0.5);
      }, []);

    return (
        
        <div className='fotter'>
        <div className="bottom-container" ref={container}></div>
       <h3 className='fotter__head'> @ 2021 | Vaibhav Agrawal</h3>
        </div> 
    
    )
}

export default Fotter;