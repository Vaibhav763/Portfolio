
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
             desc="•Developed Web application which will help the students to get their 
             doubts solved by connecting with respected Seniors along with their 
             Portfolio creation to guide and enhance their profile.
            •Setup a Login/Signup functionality by email and password authentication through JSON Web Tokens
            •Facilitated features like Explore section, Post with Like/Dislike button, Fetched GitHub repos via GitHub APIs."
             langs={['React Js','Redux','Node JS','Mongo DB','Express','Postman']}
             liveLink=""
             githubLink="https://github.com/Vaibhav763/OneStop"
             pic={os}
             />

            {/* Paper Factory */}
              <Project title="Paper Factory" 
              desc="•Web Application where students can get all the past year
              papers along with the Notes of Seniors, Related Books, Lab Manuals,
              Tutorial Sheets.Adopted Modular Design by creating a separate section for each of
              12 subjects.
              •Adapted user-friendly interface by creating separate sections for every 12 subjects with different sectional headings
              •Impact: Benefitting the students during Covid hard times with 100
              k+ clicks each month"
              langs={['HTML','Css','Django']} 
              liveLink="http://paperfactorymnnit.pythonanywhere.com/"
              githubLink="https://github.com/Vaibhav763/paper-factory"
              pic = {paper}
              />

             {/* Recruit Plus */}
             <Project title="Recruit Plus" 
              desc="•Developed a website to find current Job Openings in different departments by fetching details from Muse API
              •Composed of Dynamic Search Bar and Pagination with the top 20 Jobs displayed on each page
              •Utilized modular and responsive design to ensure 100% compatibility across all devices"
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