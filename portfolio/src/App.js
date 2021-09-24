import Header from './components/header/Header';
import Home from './components/about/Home';
import Projects from './components/project/Projects';
import Skill from './components/skill/Skill';
import Contact from './components/contact/contact';
import Fotter from './components/fotter/fotter';

function App() {
 

  return (
    <div className="App">
      <Header />
      <Home />
      <Projects />
      <Skill />
      <Contact />
      <Fotter />
    </div>
  );
}

export default App;
