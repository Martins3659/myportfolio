import React from "react";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="test-nav">
        <p>Clients Feedback</p>
        <h2>Customer testimonials</h2>
      </div>

      <div className="review">
        <div className="rev">
          <img className="rev-img" src="../src/icons/Stars.png" alt="" />
          <p>
            {" "}
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
            quis viverra.
          </p>
          <div className="prof">
            <div>
              <img className="mmm" src="../src/icons/Avatar Image.png" alt="" />
            </div>
            <div className="stars">
              <h4>Dianne Russell</h4>
              <p>Startbucks</p>
            </div>
          </div>
        </div>

        <div className="rev">
          <img className="rev-img" src="../src/icons/Stars.png" alt="" />
          <p>
            {" "}
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
            quis viverra.
          </p>

          <div className="prof">
            <div>
              <img
                className="mmm"
                src="../src/icons/Avatar Image (1).png"
                alt=""
              />
            </div>
            <div className="stars">
              <h4>Kristin Watson</h4>
              <p>Louis Vuitton</p>
            </div>
          </div>
        </div>

        <div className="rev">
          <img className="rev-img" src="../src/icons/Stars.png" alt="" />
          <p>
            {" "}
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
            quis viverra.
          </p>
          <div className="prof">
            <div>
              <img
                className="mmm"
                src="../src/icons/Avatar Image (2).png"
                alt=""
              />
            </div>
            <div className="stars">
              <h4>Kathryn Murphy</h4>
              <p>McDonald's</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
