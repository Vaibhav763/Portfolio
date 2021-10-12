
import Project from './ProjectComp';
import port from './port.png';
import paper from './paper.png';
import job from './job.png';
import os from './OneStop.png';

function Projects() {
    return (
        <div className='projects' id='projects'>
            <h1 className='section__heading'>Projects</h1>
           
            <div className="projects__projectCont">

            {/* MNNIT Quora Project */}
            <Project title="One Stop"
             desc="Developed Web application which will help the students to get their 
             doubts solved by connecting with respected Seniors along with their 
             Portfolio creation to guide and enhance their profile.
             Implemented features like Login/Sign Up, User Authentication,
            Update Profile, Posting Question with upvote/downvote option."
             langs={['React Js','Redux','Node JS','Mongo DB','Express','Postman']}
             liveLink=""
             githubLink="https://github.com/Vaibhav763/OneStop"
             pic={os}
             />

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

             {/* Recruit Plus */}
             <Project title="Recruit Plus" 
              desc="DesignedWeb Application for fnding the Jobs Opening as per our
              requirement by fetching details from Muse API.
              • Implemented Dynamic Search Bar and Pagination with top 20 Jobs
              per page to make it user-friendly along with dark-light mode feature."
              langs={['React JS','Muse API' ,'Lottie-Animation' ,'React-Bootstrap']} 
              liveLink="https://recruitplus.netlify.app"
              githubLink="https://github.com/Vaibhav763/Job_Portal"
              pic = {job}
              />

            {/* Portfolio project */}
             <Project title="Portfolio"
             desc="Designed my Portfolio Website in React Js by adopting modular approach 
             through various Components. Used React Libraries to give it a interactive UI and
             animated it with help of Lottie-Web."
             langs={['React Js','Bootstrap','Lottie-Animation']}
             liveLink=""
             githubLink="https://github.com/Vaibhav763/Portfolio" 
             pic = {port}
             />
            
            </div>
        </div>
    )
}

export default Projects;