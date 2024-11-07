import React from "react";

const Blog = () => {
  return (
    <div className="blog">
      <div className="blogNav">
        <div className="mtn">
          <p>Recent Project</p>
          <h2>My Portfolio</h2>
        </div>
        <div className="github">
          <img src="../src/icons/Vector.png" alt="" />
          <a href="">Visit My GitHub</a>
        </div>
      </div>

      <div className="portfolio">
        <div className="shad">
          <div className="first">
            <img src="../src/images/Image 1.png" alt="" />
            <div className="mon">
              <h3>Ahuse</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
                laborum quas, repellat temporibus iste dolore!
              </p>
              <a href="">
                View website <img src="../src/icons/Vector (1).png" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="shad">
          <div className="second">
            <img src="../src/images/Image 2.png" alt="" />
            <div className="mon">
              <h3>App Dashboard</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
                laborum quas, repellat temporibus iste dolore!
              </p>
              <a href="">
                View Project <img src="../src/icons/Vector (1).png" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="shad">
          <div className="third">
            <img src="../src/images/Image 3.png" alt="" />

            <div className="mon">
              <h3>Easy Rent</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
                laborum quas, repellat temporibus iste dolore!
              </p>
              <a href="">
                View website <img src="../src/icons/Vector (1).png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
