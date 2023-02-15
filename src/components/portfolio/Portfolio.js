import { useState } from "react";
import "./portfolio.css"
import Projects from "./Projects";

const Portfolio = () => {
  const [active, setActive] = useState(".all")
  return (  
    <section className="portfolio section" id="portfolio">
      <h2 className="section_title">Portfolio</h2>
      <span className="section_subtitle">Come and have a look ;)</span>

      <ul className="portfolio_list">
        <li>
          <a href="#allType" className={active === ".all" ? "portfolio_link active all" : "portfolio_link all"} id="all" onClick={() => {setActive(".all")}}>All</a>
        </li>
        <li>
          <a href="#cssFramework" className={active === ".styleFramework" ? "portfolio_link active styleFramework" : "portfolio_link styleFramework"} id="styleFramework" onClick={() => {setActive(".styleFramework")}}>Style Framework</a> 
        </li>
        <li>
          <a href="#cssPure" className={active === ".pureCss" ? "portfolio_link pureCss active" : "portfolio_link pureCss"} id="pureCss" onClick={() => {setActive(".pureCss")}}>Pure CSS</a> 
        </li>
      </ul>

      <Projects active={active}/>
    </section>
  );
}
 
export default Portfolio;