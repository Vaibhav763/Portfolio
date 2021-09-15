import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skill from './components/Skill';

function App() {
  //const title = 'Welcome to project';
  //const person={name :'Vaibhav' ,age:30};

  return (
    <div className="App">
      <Navbar />
      <Home />
      <Skill />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
