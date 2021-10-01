import c from './images/c++.png';
import sql from './images/sql.jpg';
import bootstrap from './images/bootstrap.svg';
import css from './images/css3.svg';
import github from './images/github.svg';
import js from './images/js.svg';
import react from './images/react.svg';
import nodejs from './images/nodejs.svg';
import html from './images/html5.svg';
import mongo from './images/mongodb.svg';

import Zoom from 'react-reveal/Zoom';
import './skill.css';

const Skill = () => {
    return (  
    
    <div className="skill" id='skills'>
        
        <h1 className='skill__heading'>My Tech Stack</h1>
        <div className="skill__look">
        <div className='skill__section'>

            <Zoom>  
            <div className="skill__box">
                <img className="skill__image" src={c}  loading='lazy' />
                <p>C/C++</p>
            </div>
            </Zoom> 

            <Zoom>
            <div className="skill__box">
                <img className="skill__image" src={html}  loading='lazy' />
                <p>HTML</p>
            </div>
            </Zoom>

            <Zoom>
            <div className="skill__box">
                <img className="skill__image" src={css}  loading='lazy' />
                <p>Css</p>
            </div>
            </Zoom>

            <Zoom>
            <div className="skill__box">
                <img className="skill__image" src={bootstrap}  loading='lazy' />
                <p>Bootstrap</p>
            </div>
            </Zoom>

            <Zoom>
            <div className="skill__box">
                <img className="skill__image" src={react}  loading='lazy' />
                <p>React</p>
            </div>
            </Zoom>
        </div>

        <div className='skill__section'>
        <Zoom>
            <div className="skill__box">
                <img className="skill__image" src={sql}  loading='lazy' />
                <p>My SQL</p>
            </div>
            </Zoom>
            <Zoom>
            <div className="skill__box">
                <img className="skill__image" src={github}  loading='lazy' />
                <p>Github</p>
            </div>
            </Zoom>
            <Zoom>
            <div className="skill__box">
                <img className="skill__image" src={nodejs}  loading='lazy' />
                <p>Node Js</p>
            </div>
            </Zoom>
            <Zoom>
            <div className="skill__box">
                <img className="skill__image" src={mongo}  loading='lazy' />
                <p>Mongo DB</p>
            </div>
            </Zoom>
            <Zoom>
            <div className="skill__box">
                <img className="skill__image" src={c}  loading='lazy' />
                <p>C/C++</p>
            </div>
            </Zoom>
        </div>
        </div>
        
        </div>
        
    );
}
 
export default Skill;