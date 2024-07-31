// import Navigation from "./Navigation"
import data from '../utils/data';
function Project () {
    const style = {
        display:'none' 
      }
    return(
        <div id = 'projects' style={style}>
        <h2>Work in progress</h2>
        {
            data.map(project => (
                <>
                <section key={project.name}>
                    <h3>{project.name}</h3>
                    <img src={project.src} width='300px' height='200px' alt=""/>
                    <p>Visit my website here: <a href={project.github}>Github</a> and <a href={project.url}>Deployed</a></p>
                </section>
             </>
            ))
        }

        {/* <img src="https://github.com/iis4u2nv/Portfolio/blob/main/images/amazingpicture.jpg?raw=true" className="image1" alt="amazingpicture" />
   <Navigation/> */}
      </div>
    )
}
export default Project;