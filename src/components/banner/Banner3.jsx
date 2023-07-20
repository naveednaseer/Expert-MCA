import React from "react";

import { Link } from "react-router-dom";

import img from "../../assets/images/layouts/hero.png";

function Banner3(props) {
  return (
    <section className="banner banner-width s3">
      <div className="shape"></div>
      <div className="shape right"></div>
      <div className="shape s3 right"></div>

      <div className="container big">
        <div className="row">
          <div className="col-xl-5 col-md-12">
            <div className="banner__left">
              <div className="block-text">
                <h2 className="heading">
                  Tailored Solutions for your Buisness
                  <span className="arlo_tm_animation_text_word"> </span>
                </h2>
                <p className="desc">
                  Struggling to keep up with the exorbitant amount of MCA payments ?
                  <br />
                  <br />
                  At NPMM we specialize in helping buisnesses like yours
                  overcome MCA debt challanges
                </p>

                {/* <Link to="/" className="action-btn">
                  <span>Get a quote</span>
                </Link> */}
              </div>

              <div className="couter-list">
                <div className="couter-box">
                  <h4 className="numb">
                    420+<span></span>
                  </h4>
                  <p>clients</p>
                </div>
                <div className="couter-box">
                  <h4 className="numb">$ 6M</h4>
                  <p>Saved</p>
                </div>
                <div className="couter-box">
                  <h4 className="numb">100%</h4>
                  <p>Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-md-12">
            <div className="banner__right">
              <div className="image-1">
                <img src={img} alt="img" />
              </div>

              <div
                className="banner-box"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <div className="top">
                  <h4 className="title">Ethan Jacobs</h4>

                  <div className="wishlist">
                    <div className="icon">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.25 3.8125C11.25 2.36292 10.0256 1.1875 8.51533 1.1875C7.38658 1.1875 6.41708 1.84433 6 2.78175C5.58292 1.84433 4.61342 1.1875 3.48408 1.1875C1.975 1.1875 0.75 2.36292 0.75 3.8125C0.75 8.02417 6 10.8125 6 10.8125C6 10.8125 11.25 8.02417 11.25 3.8125Z"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <p>Our latest client</p>
                  </div>
                </div>

                <div className="main">
                  <div className="info">
                    <p>Saved</p>
                    <h4>$26,400</h4>
                    <p>on his MCA debts</p>
                  </div>

                  <div className="coundown">
                    <p>
                      On an average we help pople save over 30% on MCA debts
                    </p>
                  </div>
                </div>

                <div className="button text-center">
                  <Link
                    to="/form"
                    className="action-btn"
                    data-toggle="modal"
                    data-target="#popup_bid"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span style={{ width: "100%", display: "flex", alignItems: "center"}}>
                      Get Your Quote Now
                      <svg
                        width="20"
                        height="18"
                        viewBox="0 0 20 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.5 16.5L19 9M19 9L11.5 1.5M19 9H1"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner3;
