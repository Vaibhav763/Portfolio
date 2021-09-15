import pro1 from '../images/paperfactory.png';
import pro2 from '../images/paperfactory2.png';

const Projects = () => {
    return ( 
        <div className="project">
            <h1>Projects</h1>

            <div className="section">
                <div className="block">
                    <h1>Paper Factory</h1>
                    <div className="details">
                        <p>Exclusively for First Year - By First Year.</p>
                        <p>• Created a Web Application where students can get all the past year
                        papers along with the Notes of Seniors, Related Books, Lab Manuals,
                        Tutorial Sheets for 1 year students.</p>
                        <p>• Adopted Modular Design by creating a separate section for each of
                        12 subjects.</p>
                        <p>• Impact: Beneftting the students during Covid hard times with 100
                        k+ clicks each month.</p>
                        <button> • Link: http://paperfactorymnnit.pythonanywhere.com </button>
                    </div>
                </div>
                <div className="block" >
                    <img className="pro" src={pro1} alt='pro1' loading='lazy' />
                </div>
            </div>

            <div className="section">
                <div className="block">
                    <h1>Portfolio</h1>
                </div>
                <div className="blcok" >

                </div>
            </div>
        </div>
     );
}
 
export default Projects;