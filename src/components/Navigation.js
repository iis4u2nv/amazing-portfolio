import { Link } from "react-router-dom";


// if you add another component to index
// make sure to add a Link to it here
function Navigation () {
    return(
        <nav>
        <Link to="/">About Me</Link>
        <Link to="/project">Projects</Link>
        <Link to="/contact">Contact Me</Link>
        <Link to="/resume">Resume</Link>
        <a href="#">Contact Me</a>
      </nav>
    )
}
export default Navigation;