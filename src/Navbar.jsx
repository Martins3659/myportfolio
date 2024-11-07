import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbox">
        <div className="navone">
          <img src="../src/icons/image 1@2x.png" alt="" />
          <p>MartDev,</p>
        </div>

        <div className="emptynav1"></div>

        <div className="navtwo">
          <a className="home" href="">
            Home
          </a>
          <a className="port" href="">
            Portfolio
          </a>
          <a className="abtt" href="">
            About me
          </a>
          <a className="test" href="">
            Testimonials
          </a>
        </div>

        <div className="emptynav2"></div>

        <div className="navthree">
          <a className="cont" href="">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
