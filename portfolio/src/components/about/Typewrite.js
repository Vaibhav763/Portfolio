import Typewriter from "typewriter-effect";
import React from 'react';
const Typewrite = () => {
    return (  
        <div>
           
                <span className="badge badge-dark">
                <Typewriter
                options={{
                    strings: ['Student', 'Web Developer'],
                    autoStart: true,
                    loop: true,
                }}
                />
                </span>
           
        </div>
    );
}
 
export default Typewrite;