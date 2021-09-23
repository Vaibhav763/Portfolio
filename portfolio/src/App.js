import Header from './components/header/Header';
import Home from './components/about/Home';
import Contact from './components/Contact';
import Projects from './components/project/Projects';
import Skill from './components/skill/Skill';

function App() {
 

  return (
    <div className="App">
      <Header />
      <Home />
      <Projects />
      <Skill />
      <Contact />
    </div>
  );
}

export default App;
