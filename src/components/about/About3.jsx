import React, { useState } from "react";

import Button from "../button/Button";

import img1 from "../../assets/images/layouts/about1.jpg";
import img2 from "../../assets/images/layouts/about2.jpg";

import avt1 from "../../assets/images/layouts/avt1.jpg";
import avt2 from "../../assets/images/layouts/avt2.webp";

function About3(props) {
  const [dataBlock] = useState({
    subheading: "About us",
    heading: "Who Are We",
    desc1:
      "Welcome to Not-PayMyMCA, a trusted and experienced loan consulting company dedicated to helping individuals and businesses navigate the complex world of loans. We understand that securing the right loan can be a daunting task, and that's why we are here to simplify the process for you.",
    desc2:
      "At Not-PayMyMCA, our mission is to unlock financial opportunities and empower our clients to achieve their goals with confidence. We believe that everyone deserves access to tailored loan solutions and personalized guidance to make informed financial decisions. With our expertise and extensive network of lenders, we ensure that you find the most suitable loan options that align with your unique needs and aspirations.",
  });

  const [dataCard] = useState([
    {
      id: 1,
      img: img1,
      name: "Harold Hide",
      avt: avt1,
      name: "C.E.O",
    },
    {
      id: 2,
      img: img2,
      name: "Patrick Bateman",
      avt: avt2,
      name: "Somthing",
      class: "sm",
    },
  ]);
  return (
    <section  className="about s3">
      <div className="shape"></div>
      <div className="container">
        <div id={"home_about"} className="row">
          <div className="col-xl-6 col-md-12">
            <div className="block-text pd-0">
              <h6 className="sub-heading">
                <span>{dataBlock.subheading}</span>
              </h6>
              <h3 className="heading">{dataBlock.heading}</h3>
              <p className="mb-17">{dataBlock.desc1}</p>
              <p className="mb-26">{dataBlock.desc2}</p>
              {/* <Button title='More About Us' link='/about' /> */}
            </div>
          </div>
          <div className="col-xl-6 col-md-12">
            <div
              className="about__right"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              {dataCard.map((idx) => (
                <div key={idx.id} className={`card-box ${idx.class}`}>
                  <div className="top d-flex">
                    <span className="">N</span>
                    <div>
                      <h6 className="price">{idx.name}</h6>
                    </div>
                  </div>
                  <div className="content">
                    <div className="image">
                      <img src={idx.img} alt="img" />
                    </div>

                    <div className="info d-flex">
                      <img src={idx.avt} alt="img" />

                      <div>
                        <h6 className="name">{idx.name}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About3;
