import { Link } from "react-router-dom";


// if you add another component to index
// make sure to add a Link to it here
function Navigation () {
    return(
        <nav>
        <Link to="/">About Me</Link>
        <Link to="/portfolio">work</Link>

        <a href="#">Contact Me</a>
      </nav>
    )
}
export default Navigation;