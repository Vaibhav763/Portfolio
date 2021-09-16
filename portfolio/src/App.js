import Header from './components/header/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skill from './components/Skill';

function App() {
 

  return (
    <div className="App">
      <Header />
      <Home />
      <Skill />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
