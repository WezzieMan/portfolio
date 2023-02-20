/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import "./footer.css"

const Footer = () => {
  return (  
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Daniel Florian Marcoci</h1>

        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">About</a>
          </li>

          <li>
            <a href="#skills" className="footer_link">Skills</a>
          </li>

          <li>
            <a href="#portfolio" className="footer_link">Portfolio</a>
          </li>
        </ul>

        <div className="footer_social">
          <a href="https://www.instagram.com/daniel_marcoci/" className="footer_social-link" target="_blank">
            <i class="uil uil-instagram"></i>
          </a>

          <a href="https://www.linkedin.com/in/daniel-marcoci-19459b212/" className="footer_social-link" target="_blank">
            <i class="uil uil-linkedin-alt"></i>
          </a>

          <a href="https://github.com/WezzieMan" className="footer_social-link" target="_blank">
            <i class="uil uil-github-alt"></i>
          </a>
        </div>

        <span className="footer_copy">&#169; Daniel Marcoci</span>
      </div>
    </footer>
  );
}
 
export default Footer;