import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footnav">
        <div className="fotdev">
          <img src="../src/icons/image 1@2x.png" alt="" />
          <p>MartDev,</p>
        </div>

        <div className="fotlink">
          <a href="">Home</a>
          <a href="">Portfolio</a>
          <a href="">About me</a>
          <a href="">Contact</a>
          <a href="">Testimonials</a>
        </div>

        <div className="fotsocials">
          <a href="">
            <img src="../src/icons/Facebook.png" alt="" />
          </a>

          <a href="">
            <img src="../src/icons/Instagram.png" alt="" />
          </a>

          <a href="">
            <img src="../src/icons/Twitter.png" alt="" />
          </a>

          <a href="">
            <img src="../src/icons/LinkedIn.png" alt="" />
          </a>
        </div>
      </div>
      <hr />
      <div className="footend">
        <div className="fotend">
          <p>Made with 💖 by Martins</p>
        </div>

        <div className="ends">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Cookies Settings</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
