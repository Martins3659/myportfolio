import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div className="connav">
        <p>Get In Touch</p>
        <h2>Contact me</h2>
        <p>Fill the details below... </p>
      </div>

      <div class="contact-form">
        <form action="/submit_form" method="POST">
          {/* <!-- First Name --> */}
          <div className="cont-flex">
            <div class="form-group">
              <label for="first-name">First Name</label>
              <input
                type="text"
                id="first-name"
                name="first-name"
                placeholder="Enter your first name"
                required
              />
            </div>

            {/* <!-- Last Name --> */}
            <div class="form-group">
              <label for="last-name">Last Name</label>
              <input
                type="text"
                id="last-name"
                name="last-name"
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>

          {/* <!-- Email --> */}
          <div className="cont-flex">
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* <!-- Phone Number --> */}
            <div class="form-group">
              <label for="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                required
              />
            </div>
          </div>

          {/* <!-- Message --> */}
          <div class="form-groupp">
            <label for="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              rows="4"
              required
            ></textarea>
          </div>

          {/* <!-- Checkbox --> */}
          <div class="checkbox-group">
            <input type="checkbox" id="subscribe" name="subscribe" />
            <label for="subscribe">I accept the terms</label>
          </div>

          {/* <!-- Submit Button --> */}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
