import './App.css';
import Landing from './components/landing';
import Nav from './components/Nav';
import Aboutme from './components/aboutme';
import Little from './components/little';
import Project from './components/project';
import Skills from './components/skills';
function App() {
  return (
    <>
    <Nav/>
    <Landing/>
    <Little/>
    <Aboutme/>
    <Project/>
    <Skills/>
    </>
  );
}

export default App;
