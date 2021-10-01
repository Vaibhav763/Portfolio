import './home.css';
import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import animate from 'lottie-web';
import Typewrite from './Typewrite';

function Home() {

    const container = useRef(null);
    useEffect(() => {
        Lottie.loadAnimation({
          container: container.current,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: require('./about.json'),
        });
        animate.setSpeed(0.8);
      }, []);

    return (

        <div className="intro">
            
            {/* <img  className="intro__image" src={pic} alt='pic' loading='lazy' /> */}
            <div className="about-container" ref={container}></div>

            <div className='intro__desc'>
                <h1 className='intro__head'>Hi, I'm Vaibhav Agrawal</h1>
                <h1 className='intro__text'><Typewrite/> </h1>
                <div className="details">
                    <p>I enjoy solving complex problems.Frequently praised as detail-oriented by my peers. 
                    I can be relied upon to help your company achieve its goals by providing sustainable and scalable solution.</p>
                    <a href='#contact' className='intro__aboutLink'>Get In Touch</a>
                </div>
            </div>
        </div>
    )
}

export default Home;
