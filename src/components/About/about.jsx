// About.js

import React from "react";

const About = () => {
  return (
    <div className="container-about">
      <div className="about-us">
        <div className="img" style={{ textAlign: "center" }}>
          <img
            style={{ maxWidth: "100%", height: "auto" }}
            src="https://4.imimg.com/data4/MF/CL/MY-13780903/pigeon-bird-nets.jpg"
            alt="Team Photo"
          />
        </div>{" "}
        <div className="about-us-content" style={{ margin: "30px", textAlign: "justify" }}>
          {/* Saloni Bird Net & Spike Fitting Service Content */}
          <h2>About Saloni Bird Net & Spike Fitting Service</h2>
          <p>
            Welcome to Saloni Bird Net & Spike Fitting Service, your trusted partner in effective bird control solutions. With a commitment to excellence and a passion for providing top-notch services, we have been serving the community for [X] years, making spaces safer and more hygienic.
          </p>

          <p>
            Our mission is to create bird-free environments for our clients. We understand the nuisance and health risks associated with bird infestations, and we are dedicated to delivering innovative, humane, and sustainable solutions. Our goal is to protect your property while ensuring the well-being of our feathered friends.
          </p>

          <p>
            At Saloni Bird Net & Spike Fitting Service, customer satisfaction is our priority. We take pride in our prompt and reliable services, ensuring that your bird control needs are met with professionalism and efficiency. Our commitment to excellence has earned us a reputation for being a trusted partner in pest management.
          </p>

          <p>
            Ready to make your property bird-free? Contact Saloni Bird Net & Spike Fitting Service today for a consultation. Let us work together to create a customized solution that meets your requirements and ensures a pest-free environment.
          </p>
          {/* End of Saloni Bird Net & Spike Fitting Service content */}
        </div>
      </div>
    </div>
  );
};

export default About;
