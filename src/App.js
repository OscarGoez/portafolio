import './App.css';

import Profile from './components/Profile';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
//import References from './components/References';
import Contact from './components/Contact';



function App() {
  return (
    <div className="App">
      <header className="App-header">        
        <Profile/>
        <AboutMe/>
        <Experience/>
        <Education/>
        <Skills/>
        <Contact/>
      </header>
    </div>
  );
}

export default App;
