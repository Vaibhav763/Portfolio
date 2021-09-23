import Header from './components/header/Header';
import Home from './components/about/Home';
import Contact from './components/Contact';
import Projects from './components/project/Projects';
import Skill from './components/Skill';

function App() {
 

  return (
    <div className="App">
      <Header />
      <Home />
     
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
