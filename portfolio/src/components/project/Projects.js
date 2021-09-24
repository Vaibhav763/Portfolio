
import Project from './ProjectComp';
import port from './port.png';
import paper from './paper.png';

function Projects() {
    return (
        <div className='projects' id='projects'>
            <h1 className='section__heading'>Projects</h1>
           
            <div className="projects__projectCont">

            {/* Paper Factory */}
              <Project title="Paper Factory" 
              desc="Web Application where students can get all the past year
              papers along with the Notes of Seniors, Related Books, Lab Manuals,
              Tutorial Sheets.Adopted Modular Design by creating a separate section for each of
              12 subjects.
              Impact: Benefitting the students during Covid hard times with 100
              k+ clicks each month"
              langs={['HTML','Css','Django']} 
              liveLink="http://paperfactorymnnit.pythonanywhere.com/"
              githubLink="https://github.com/Vaibhav763/paper-factory"
              pic = {paper}
              />

            {/* Portfolio project */}
             <Project title="Portfolio"
             desc="Portfolio Website "
             langs={['React']}
             liveLink=""
             githubLink="https://github.com/Vaibhav763/Portfolio" 
             pic = {port}/>

             {/* MNNIT Quora Project */}
             <Project title="MNNIT Quora"
             desc="Upcoming Project"
             langs={['React','Redux','Node JS','Mongo DB','Express']}
             liveLink=""
             githubLink=""
             />

            
            </div>
        </div>
    )
}

export default Projects;