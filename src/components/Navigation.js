import { button } from "react-router-dom";


// if you add another component to index
// make sure to add a button to it here
function Navigation () {
  function about() {
    document.querySelector('#projects').style='display:none;'
    document.querySelector('#footer').style='display:none;'
    document.querySelector('#about').style='display:block;'
    document.querySelector('#resume').style='display:none;'
  }
  function projects() {
    document.querySelector('#projects').style='display:block;'
    document.querySelector('#footer').style='display:none;'
    document.querySelector('#about').style='display:none;'
    document.querySelector('#resume').style='display:none;'

  }
  function footer() {
    document.querySelector('#projects').style='display:none;'
    document.querySelector('#footer').style='display:block;'
    document.querySelector('#about').style='display:none;'
    document.querySelector('#resume').style='display:none;'

  }
  function resume() {
    document.querySelector('#projects').style='display:none;'
    document.querySelector('#footer').style='display:none;'
    document.querySelector('#about').style='display:none;'
    document.querySelector('#resume').style='display:block;'

  }
    return(
        <nav>
        <button onClick={about} to="/">About Me</button>
        <button onClick={projects} to="/project">Projects</button>
        <button onClick={footer}to="/contact">Contact Me</button>
        <button onClick={resume}to="/resume">Resume</button>
      </nav>
    )
}
export default Navigation;