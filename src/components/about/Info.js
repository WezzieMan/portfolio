const Info = () => {
  return (  
    <div className="about_info grid">
      <div className="about_box">
      <i className='bx bx-award about_icon' ></i>

        <h3 className="about_title">Experience</h3>
        <span className="about_subtitle">1 Year Working</span>
      </div>

      <div className="about_box">
      <i className='bx bx-briefcase-alt-2 about_icon' ></i>

        <h3 className="about_title">Completed</h3>
        <span className="about_subtitle">1 work project <br />5 hobby projects</span>
      </div>

      <div className="about_box">
      <i class='bx bx-joystick about_icon'></i>
       
        <h3 className="about_title">Hobbies</h3>
        <span className="about_subtitle">Gym | Gaming <br />Reading</span>
      </div>
    </div>
  );
}
 
export default Info;