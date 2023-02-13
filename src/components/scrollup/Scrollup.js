import "./scrollup.css"

const Scrollup = () => {
  window.addEventListener("scroll", function() {
    const scrollup = document.querySelector(".scrollup");

    this.scrollY >= 560 ? scrollup.classList.add("show-scroll") : scrollup.classList.remove("show-scroll");
  })

  return (  
    <a href="#" className="scrollup">
      <i className="ui uil-arrow-up scrollup_icon"></i>
    </a>
  );
}
 
export default Scrollup;