import c from '../images/icons/c++.png';
import sql from '../images/icons/sql.jpg';
import bootstrap from '../images/icons/bootstrap.svg';
import css3 from '../images/icons/css3.svg';
import github from '../images/icons/github.svg';
import js from '../images/icons/js.svg';
import react from '../images/icons/react.svg';
import nodejs from '../images/icons/nodejs.svg';
import html from '../images/icons/html5.svg';
import mongo from '../images/icons/mongodb.svg';

const Skill = () => {
    return (  
        <div className="skill">
            <h1>My Tech Stack</h1>
            <div className="imagebox">

                <div className="image">
                    <img src={c} alt='c' loading='lazy' width='80px' height='80px' />
                    <p>C/C++</p>
                </div>

                <div className="image">
                    <img src={html} alt='html' loading='lazy' width='80px' height='80px' />
                    <p>HTML5</p>
                </div>

                <div className="image">
                    <img src={css3} alt='css3' loading='lazy' width='80px' height='80px' />
                    <p>Css3</p>
                </div>

                <div className="image">
                    <img src={bootstrap} alt='bootstrap' loading='lazy' width='80px' height='80px' />
                    <p>Bootstrap</p>
                </div>

                <div className="image">
                    <img src={react} alt='react' loading='lazy' width='80px' height='80px' />
                    <p>React JS</p>
                </div>

                <div className="image">
                    <img src={github} alt='github' loading='lazy' width='80px' height='80px' />
                    <p>Github</p>
                </div>

                <div className="image">
                    <img src={sql} alt='sql' loading='lazy' width='80px' height='80px' />
                    <p>SQL</p>
                </div>

                

            </div>
        </div>
    );
}
 
export default Skill;