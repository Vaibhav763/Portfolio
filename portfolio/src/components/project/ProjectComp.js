import './project.css';
import { FaLink,FaGithub } from "react-icons/fa";


const Project = (props) => {
    return (
        
    <div className='project'>
        <div className="project__basicInfo">
            <img className="project__image" src={props.pic}  loading='lazy' />
        </div>

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
    </div>
        
    )
}

export default Project;