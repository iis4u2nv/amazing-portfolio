import Navigation from "./Navigation"
import data from '../utils/data';
function Project () {
    return(
        <div>
        <h2>Work in progress</h2>
        {
            data.map(project => (
                <>
                <section key={project.name}>
                    <h3>jate-text-19</h3>
                    <img src={project.src} />
                    <p>Visit my website here: {`https://github.com/iis4u2nv/jate-text-19`} and {`https://powerful-brushlands-61981-a88f7cb4f808.herokuapp.com/`}</p>
                </section>
                <section key={project.name}>
                <h3>svg-logo-maker</h3>
                <img src={project.src} />
                <p>Visit my website here: {`https://github.com/iis4u2nv/jate-text-19`} and {`https://powerful-brushlands-61981-a88f7cb4f808.herokuapp.com/`}</p>
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
/* Project */
// .project {
//     margin-bottom: 20px;
//   }
  
//   .project .title {
//     font-size: 1.5em;
//     margin-bottom: 0.5em;
//   }
  
//   .project .description {
//     font-size: 14px;
//   }
  
//   .project .image {
//     max-width: 100%;
//   }