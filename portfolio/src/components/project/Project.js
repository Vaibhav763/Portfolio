import './project.css';
import { FaLink,FaGithub } from "react-icons/fa";


const Project = ({title,desc,langs,liveLink,githubLink,pic}) => {
    return (
        
    <div className='project'>
        <div className="project__basicInfo">
            <img className="project__image" src={pic}  loading='lazy' />
        </div>

        <div className="project__detail">
            <h2 className="project__title">{title}</h2>
            <p className="project__desc">{desc}</p>
            <div className="project__langs">
            {
                langs.map( lang => (
                    <span key={Math.random()} className="project__lang">{lang}</span>
                ))
            }
            </div>
            <div className='project__links'>
                { liveLink && <a href={liveLink}><FaLink /></a>}
                <a href={githubLink}><FaGithub /></a>
            </div>
        </div>
    </div>
        
    )
}

export default Project;