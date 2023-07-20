import React, { useState } from "react";
import PropTypes from "prop-types";
import { Accordion } from "react-bootstrap-accordion";

import img from "../../assets/images/layouts/faq.png";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

Faq3.propTypes = {
  data: PropTypes.array,
};

function Faq3(props) {
  const { data } = props;

  const [dataBlock] = useState({
    subheading: "FAQs",
    heading: "Frequently Aksed Questions",
    desc: "Below is a list of frequently asked questions and answers. Please check this FAQ first before contacting us.",
  });


  return (
    <section id={"home_faq"} className="faq s3">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-md-12">
            <div className="block-text">
              <h6 className="sub-heading">
                <span>{dataBlock.subheading}</span>
              </h6>
              <h3 className="heading">{dataBlock.heading}</h3>
              <p>{dataBlock.desc}</p>
            </div>
            <div className="faq__main flat-tabs">
              <Tabs>
                <div className="content-inner">
                  <div className="flat-accordion">
                    {data.map((idx) => (
                      <Accordion
                        show={idx.show}
                        key={idx.id}
                        title={idx.title}
                        className="flat-toggle h6"
                      >
                        <p className="toggle-content">{idx.text} </p>
                      </Accordion>
                    ))}
                  </div>
                </div>
              </Tabs>
            </div>
          </div>

          <div className="col-xl-6 col-md-12">
            <div
              className="image"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <img src={img} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq3;
