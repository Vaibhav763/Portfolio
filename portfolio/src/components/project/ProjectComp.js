import './project.css';
import { FaLink,FaGithub } from "react-icons/fa";
import Fade from 'react-reveal/Fade';

const Project = (props) => {
    return (
        
    <div className='project'>
        <Fade left>
        <div className="project__basicInfo">
            <img className="project__image" alt="" src={props.pic}  loading='lazy' />
        </div>
        </Fade>

        <Fade right>
        <div className="project__detail">
            <h2 className="project__title">{props.title}</h2>
            <p className="project__desc">{props.desc}</p>
            <div className="project__langs">
            {
                props.langs.map( lang => (
                    <span key={Math.random()} className="project__lang">{lang}</span>
                ))
            }
            </div>
            <div className='project__links'>
                { props.liveLink && <a href={props.liveLink}><FaLink /></a>}
                <a href={props.githubLink}><FaGithub /></a>
            </div>
        </div>
        </Fade>
    </div>
        
    )
}

export default Project;