import Header from "./components/header/Header";
import "./App.css"
import Home from "./components/home/Home";
import About from "./components/about/About"
import Skills from "./components/skills/Skills";
import Qualification from "./components/qualification/Qualification";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Scrollup from "./components/scrollup/Scrollup";
import Portfolio from "./components/portfolio/Portfolio";
import { createContext, useState } from "react";

// export const ThemeContext = createContext(null)

function App() {
  // const [theme, setTheme] = useState("dark");

  // const toggleTheme = () => {
  //   setTheme((cur) => (cur === "light" ? "dark" : "light"));
  // }
  return (
    // <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div >
        <Header />

        <main className="main">
          <Home />
          <About />
          <Skills />
          <Qualification />
          <Portfolio />
          <Contact />
        </main>
        
        <Footer />
        <Scrollup />
      </div>
    // </ThemeContext.Provider>
  );
}

export default App;
