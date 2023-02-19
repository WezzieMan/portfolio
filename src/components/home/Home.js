import Data from "./Data";
import "./home.css"
import ScrollDown from "./ScrollDown";
import Socials from "./Socials";

const Home = ({toggleTheme, theme}) => {
  return (  
    <section className="home section" id="home">
      <div className="home_container container grid">
        <div className="home_content grid">
          <Socials />

          <div className="home_img"></div>

          <Data />
        </div>

      <ScrollDown />
      </div>
    </section>
  );
}
 
export default Home;