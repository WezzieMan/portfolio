import calculator from "../../assets/Calculator.png"
import gymClone from "../../assets/GymSiteClone.png"
import readingList from "../../assets/readingList.png"

const Projects = (props) => {
  function goTo(type) {
    switch (type) {
      case "calculator":
        window.location.href = "https://storied-tarsier-2d4ad3.netlify.app/";
        break;
    
      case "gymClone":
        window.location.href = "https://incredible-madeleine-1e38d0.netlify.app/"; 
      break;

      case "booklist":
        window.location.href = "https://effortless-douhua-8e8029.netlify.app/";
        break;

      default:
        break;
    }
  }

  return (  
    <div className="portfolio_container container grid">
      {(props.active === ".all" || props.active === ".pureCss") && <div className="portfolio_container-project classic" id="calculator">
        <img src={calculator} alt="webPage" className="portfolio_container_project-image"/>

        <h3>Calculator </h3>
        <p>HTML/CSS and React.js <i onClick={() => goTo("calculator")} className="bx bx-right-arrow-alt contact_button-icon"></i></p>
      </div> }

      {(props.active === ".all" || props.active === ".styleFramework") &&  <div className="portfolio_container-project framework" id="gymClone">
        <img src={gymClone} alt="webPage" className="portfolio_container_project-image"/>

        <h3>Gym Website Clone {console.debug(props.active)}</h3>
        <p>HTML/CSS React.js and Tailwind CSS <i  onClick={() => goTo("gymClone")} className="bx bx-right-arrow-alt contact_button-icon"></i></p>
      </div>}

      {(props.active === ".all" || props.active === ".styleFramework") &&  <div className="portfolio_container-project framework" id="booklist" >
        <img src={readingList} alt="webPage" className="portfolio_container_project-image"/>

        <h3>Booklist</h3>
        <p>HTML/CSS React.js and Tailwind CSS <i onClick={() => goTo("booklist")} className="bx bx-right-arrow-alt contact_button-icon"></i></p>
      </div>}
    </div>
  );
}
 
export default Projects;