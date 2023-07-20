import React, { useState } from "react";
import logo from "../assets/images/logo/logo.png";

import { Link , NavLink } from 'react-router-dom';


const Form = () => {
  const [step, setStep] = useState(1);
  const [formFilled, setFormFilled] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    number: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    DOB: "",
    debtAmount: 10000,
  });

  const states = [
    { label: "", value: "" },
    { label: "Alabama", value: "Alabama" },
    { label: "Alaska", value: "Alaska" },
    { label: "Arizona", value: "Arizona" },
    { label: "Arkansas", value: "Arkansas" },
    { label: "California", value: "California" },
    { label: "Colorado", value: "Colorado" },
    { label: "Connecticut", value: "Connecticut" },
    { label: "Delaware", value: "Delaware" },
    { label: "Florida", value: "Florida" },
    { label: "Georgia", value: "Georgia" },
    { label: "Hawaii", value: "Hawaii" },
    { label: "Idaho", value: "Idaho" },
    { label: "Illinois", value: "Illinois" },
    { label: "Indiana", value: "Indiana" },
    { label: "Iowa", value: "Iowa" },
    { label: "Kansas", value: "Kansas" },
    { label: "Kentucky", value: "Kentucky" },
    { label: "Louisiana", value: "Louisiana" },
    { label: "Maine", value: "Maine" },
    { label: "Maryland", value: "Maryland" },
    { label: "Massachusetts", value: "Massachusetts" },
    { label: "Michigan", value: "Michigan" },
    { label: "Minnesota", value: "Minnesota" },
    { label: "Mississippi", value: "Mississippi" },
    { label: "Missouri", value: "Missouri" },
    { label: "Montana", value: "Montana" },
    { label: "Nebraska", value: "Nebraska" },
    { label: "Nevada", value: "Nevada" },
    { label: "New Hampshire", value: "New Hampshire" },
    { label: "New Jersey", value: "New Jersey" },
    { label: "New Mexico", value: "New Mexico" },
    { label: "New York", value: "New York" },
    { label: "North Carolina", value: "North Carolina" },
    { label: "North Dakota", value: "North Dakota" },
    { label: "Ohio", value: "Ohio" },
    { label: "Oklahoma", value: "Oklahoma" },
    { label: "Oregon", value: "Oregon" },
    { label: "Pennsylvania", value: "Pennsylvania" },
    { label: "Rhode Island", value: "Rhode Island" },
    { label: "South Carolina", value: "South Carolina" },
    { label: "South Dakota", value: "South Dakota" },
    { label: "Tennessee", value: "Tennessee" },
    { label: "Texas", value: "Texas" },
    { label: "Utah", value: "Utah" },
    { label: "Vermont", value: "Vermont" },
    { label: "Virginia", value: "Virginia" },
    { label: "Washington", value: "Washington" },
    { label: "West Virginia", value: "West Virginia" },
    { label: "Wisconsin", value: "Wisconsin" },
    { label: "Wyoming", value: "Wyoming" },
    { label: "American Samoa", value: "American Samoa" },
    { label: "Guam", value: "Guam" },
    { label: "Northern Mariana Islands", value: "Northern Mariana Islands" },
    { label: "Puerto Rico", value: "Puerto Rico" },
    { label: "U.S. Virgin Islands", value: "U.S. Virgin Islands" },
  ];



const handleNext = () => {
    const form = document.querySelector("form");
    if (form.reportValidity()) {
        setStep(step + 1);
    }
    console.log("Form Data:", formData);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    const form = document.querySelector("form");

    if (form.reportValidity()) {
        fetch("https://sheetdb.io/api/v1/e8ykvrrqmrol1", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              data: formData,
            }),
          })
            .then((response) => response.json())
            .then((data) => console.log(data));
        console.log("Form submitted!");
        console.log("Form Data:", formData);
        setFormFilled(true)
    }

  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const renderStep = () => {
    if (step === 1) {
      return (
        <div className="col">
          <div className="block-text center">
            <h6 className="sub-heading">
              <span>Get a custom quote!</span>
            </h6>
            <h3 className="heading">Enter your debt amount</h3>
            <h4>
              $
              {formData.debtAmount == 5000000
                ? formData.debtAmount
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "+"
                : formData.debtAmount
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </h4>
          </div>
          <label>Amount</label>
          <input
            required
            type="range"
            min="10000"
            max="5000000"
            step="1000"
            name="debtAmount"
            className="range-control"
            value={formData.debtAmount}
            onChange={handleChange}
          />
          <div className="row center mt-42  mb-0">
            <div className="col">
              <button className="action-btn" style={{marginLeft: "10px", marginRight: "10px"}} onClick={handleNext}>
                <span>Next</span>
              </button>
            </div>
          </div>
        </div>
      );
    } else if (step === 2) {
      return (
        <div className="col">
          <div className="block-text center">
            <h6 className="sub-heading">
              <span>Get a custom quote!</span>
            </h6>
            <h3 className="heading">Select your sate</h3>
          </div>

          <select
            required
            style={{color: "white"}}
            className="form-control opt-arrow"
            name="state"
            value={formData.state}
            onChange={handleChange}
          >
            {states.map((obj) => (
              <option
                name="state"
                onChange={handleChange}
                key={obj.label}
                value={obj.value}
              >
                {obj.label}
              </option>
            ))}
          </select>

          <div className="row center mt-42  mb-0">
            <div className="col">
              <button className="action-btn" style={{marginLeft: "10px", marginRight: "10px"}} onClick={handlePrevious}>
                <span>Previous</span>
              </button>
              {formData.state == "" ? (
                <button disabled style={{marginLeft: "10px", marginRight: "10px"}} className="action-btn" onClick={handleNext}>
                    <span>Next</span>
                </button>
              ) : (
                <button className="action-btn" style={{marginLeft: "10px", marginRight: "10px"}} onClick={handleNext}>
                    <span>Next</span>
                </button>
              )}

            </div>
          </div>
        </div>
      );
    } else if (step === 3) {
      return (
        <div className="col">
            <h3>Personal Details</h3>
          <label className="mt-24">First Name</label>
          <input
          placeholder="Enetr Your First Name"
            required
            type="text"
            className="form-control"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
          />
          <label className="mt-24">Last Name</label>
          <input
          placeholder="Enter Your Last Name"
            required
            type="text"
            className="form-control"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
          />

          <label className="mt-24">Email</label>
          <input
            required
            placeholder="Enetr Your Email Address"
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <label className="mt-24">Number</label>
          <input
            required
            pattern="[0-9]{10}"
            title="Ten digits phone number"
            maxlength="10"
            type="tel"
            placeholder="Enter Your Number"
            className="form-control"
            name="number"
            value={formData.number}
            onChange={handleChange}
          />

          <div className="row center mt-42  mb-0">
            <div className="col">
              <button className="action-btn" style={{marginLeft: "10px", marginRight: "10px"}} onClick={handlePrevious}>
                <span>Previous</span>
              </button>
              <button className="action-btn" style={{marginLeft: "10px", marginRight: "10px"}} onClick={handleNext}>
                <span>Next</span>
              </button>
            </div>
          </div>
        </div>
      );
    } else if (step === 4) {
      return (
        <div className="col">
            <h3>Address Details</h3>
          <label className="mt-24">Address</label>
          <input
            required
            type="text"
            className="form-control"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          <label className="mt-24">City</label>
          <input
            required
            type="text"
            className="form-control"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />

          <label className="mt-24">State</label>
          <input
            required
            disabled
            type="text"
            className="form-control"
            name="state"
            value={formData.state}
            onChange={handleChange}
          />

          <label className="mt-24">Zip</label>
          <input
            required
            type="tel"
            pattern="[0-9]{5}"
            maxLength="5"
            title="Five digits phone number"
            className="form-control"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
          />

          <label className="mt-24">D.O.B</label>
          <input
            required
            type="date"
            className="form-control"
            name="DOB"
            value={formData.DOB}
            onChange={handleChange}
          />

          <div className="row center mt-42  mb-0">
            <div className="col">
              <button className="action-btn" style={{marginLeft: "10px", marginRight: "10px"}} onClick={handlePrevious}>
                <span>Previous</span>
              </button>
              <button className="action-btn" style={{marginLeft: "10px", marginRight: "10px"}} onClick={handleSubmit}>
                <span>Submit</span>
              </button>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div>
                <header id="header_main" className="is-fixed">
            <div className="container big">
                <div className="row">
                    <div className="col-12">
                        <div className="header__body">
                            <div className="header__logo">
                                <Link className="mt-29" to="/">
                                <img
                                  style={{ width: "250px", marginLeft: "20px" }}
                                  id="site-logo"
                                  src={logo}
                                  alt="Logo"
                                />
                                </Link>
                         
                            </div>
                            </div>
                            </div>
                            </div>
                            </div>
                            </header>
      <section className="touch">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* <div className="block-text center">
                <h6 className="sub-heading">
                  <span>Get in Touch!</span>
                </h6>
                <h3 className="heading">
                  Let’s Start Working <br />
                  Together
                </h3>
              </div> */}
              <div style={{ justifyContent: "center" }} className="touch__main">
                {formFilled ?
                (
                    <div className="mb-50 mt-50 block-text center">
                    <h6 className="sub-heading">
                      <span>Thanks!</span>
                    </h6>
                    <h3 className="heading">
                      Your response has been recorded
                      <br />
                      We will contact you soon.
                    </h3>
                  </div>
                )
                :
                (
                <form action="#" className="form-box">
                  <div className="row">{renderStep()}</div>
                </form>
                )
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Form;
