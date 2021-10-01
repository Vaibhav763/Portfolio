import Header from './components/header/Header';
import Home from './components/about/Home';
import Projects from './components/project/Projects';
import Skill from './components/skill/Skill';
import Contact from './components/contact/contact';
import Fotter from './components/fotter/fotter';
import Load from './components/load/Load';
import React,{useState,useEffect} from 'react';

function App() {


  const [ loading,Setloading] = useState(true);

  useEffect(() => {
   setTimeout(() => {
    Setloading(false)
   },4000)})

  return (
    <div className="App">
      {
        loading ?
        <Load />
        : <>
        <Header />
        <Home />
        <Projects />
        <Skill />
        <Contact />
        <Fotter />
        </>
      }
    </div>
  );
}

export default App;
