
import Project from './Project';
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
              Impact: Benetting the students during Covid hard times with 100
              k+ clicks each month"
              langs={['HTML','Css','Django']} 
              liveLink="http://paperfactorymnnit.pythonanywhere.com/"
              githubLink="https://github.com/Vaibhav763/paper-factory"
              pic = {paper}
              />

            {/* Portfolio project */}
             <Project title="Portfolio"
             desc="A fitness blogging website for fitness instructor Siddharth Sharma.  
             I have added Intersection Observer api and animations for better user experience."
             langs={['React']}
             githubLink="https://github.com/tanishgupta-git/Fitwithsid" 
             pic = {port}/>

             {/* Crown Clothing Project */}
             <Project title="Crown Clothing"
             desc="Developed an e-commerce website using firebase at backend and added redux-saga for better handling
             of asynchrounous tasks. In this i have built a server using Express to handle the payment by stripe.
             It is deployed on heroku."
             langs={['React','Redux','Firebase','Stripe','Express']}
             liveLink="https://crown-clothtanish.herokuapp.com/"
             githubLink="https://github.com/tanishgupta-git/Crown-Clothing"
             />

            
            </div>
        </div>
    )
}

export default Projects;