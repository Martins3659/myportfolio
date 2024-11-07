import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="headone">
        <p>Hey, I am Martins</p>

        <h2>I develop dynamic and User-Centered Web Application</h2>

        <p className="head-intro">
          My expertise spans both front-end and back-end development, enabling
          me to build comprehensive solutions that meet diverse client needs.
        </p>
        <button className="btnn">Get In Touch</button>
      </div>
      <div className="headtwo">
        <img src="../src/images/2.jpg" width={917.33} height={729.74} alt="" />
      </div>
    </div>
  );
};

export default Header;
