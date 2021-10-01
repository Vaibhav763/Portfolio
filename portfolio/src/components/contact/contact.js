import './contact.css';
import { GrLinkedinOption,GrInstagram,GrGithub ,GrFacebook,GrMail } from "react-icons/gr";
import { FaLink} from "react-icons/fa";
import Form from './form';

const Connect = () => {
    return (
        <div className='contact' id='contact'>
            <h1 className='contact__heading'>Contact</h1>

            <div className='contact__section'>

                <div className="contact__info">
                    <h2 className="project__title">Vaibhav Agrawal</h2>
                        
                    <p className="contact__text">I am a Prefinal Year Student at MNNIT Allahabad.</p>

                    <ul className='contact__social'>
                    <a href="https://www.linkedin.com/in/VaibhavMNNIT/" target="_blank" rel="noreferrer"><GrLinkedinOption /> LinkedIn</a>
                    <a href="https://github.com/Vaibhav763" target="_blank" rel="noreferrer" ><GrGithub /> Github</a>
                    <a href="https://www.facebook.com/vaibhav.agrawal.5036/" target="_blank" rel="noreferrer"><GrFacebook /> Facebook</a>
                    <a href="" target="_blank" rel="noreferrer" ><GrInstagram/> Instagram</a>
                    <a href="mailto:vaibhavagrawal093@gmail.com" target="_blank"  rel="noreferrer"><GrMail/> Mail</a>
                    <a href=""><FaLink/> Website</a>
                    </ul>

                    <p className="contact__text">I would love to hear from you!</p>
                
                </div>

                <div className="form__detail">
                    <Form />
                </div>
            </div>
        </div>
        
    )
}

export default Connect;