import React, { useState, useEffect } from "react";

import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import menus from "../../pages/menu";

import logo from "../../assets/images/logo/logo.png";

import "./styles.scss";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 300);
    });
    return () => {
      setScroll({});
    };
  }, []);

  const [menuActive, setMenuActive] = useState(null);

  const handleMenuActive = () => {
    setMenuActive(!menuActive); 
  };

  const [activeIndex, setActiveIndex] = useState(null);
  const handleDropdown = (index) => {
    setActiveIndex(index);
  };

  return (
    <header
      style={{ display: "flex", justifyContent: "space-around" }}
      id="header_main"
      className={`header ${scroll ? "is-fixed" : ""}`}
    >
      <div className=" big">
        <div className=" container row">
          <div className="col-12">
            <div className="header__body">
              <div className="header__logo">
                <Link to="/">
                  <img
                    style={{ width: "250px", marginLeft: "-20px" }}
                    id="site-logo"
                    src={logo}
                    alt="Logo"
                  />
                  {/* <h5 className='logofont'>Not PayMyMCA</h5> */}
                </Link>
              </div>

              {/* <div className="header__right">
                            <nav id="main-nav" className={`main-nav ${menuActive ? 'active' : ''}`}>
                                    <ul id="menu-primary-menu" className="menu">
                                        {
                                            menus.map((data,idx) => (
                                                <li key={idx} onClick={()=> handleDropdown(idx)} className={`menu-item ${data.namesub ? 'menu-item-has-children' : ''} ${activeIndex === idx ? 'active' : ''}`} 
                                                
                                                >
                                                    <Link to={data.links}>{data.name}</Link>
                                                    <HashLink smooth to={data.links} > {data.name} </HashLink>
                                              
                                                    
                                                </li>
                                            ))
                                        }

                                    </ul>
                                </nav>
                                <div className={`mobile-button ${menuActive ? 'active' : ''}`} onClick={handleMenuActive}><span></span></div>
                            </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="header__action">
        <Link to="/form" className="action-btn">
          <span>Get a quote</span>
        </Link>
      </div> */}
      <div className="header__right">
        <nav id="main-nav" className={`main-nav ${menuActive ? "active" : ""}`}>
          {/* <ul style={{marginLeft: "1rem", marginTop: "2rem"}} id="menu-primary-menu" className="menus"> */}
          <ul id="menu-primary-menu" className="menus">
            {menus.map((data, idx) => (
              <li
                key={idx}
                onClick={() => handleDropdown(idx)}
                className={`menu-item ${
                  data.namesub ? "menu-item-has-children" : ""
                } ${activeIndex === idx ? "active" : ""}`}
              >
                <Link to="/form" className="mob-menu-button action-btn">
                  <span>Get a quote</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div
          className={`mobile-button ${menuActive ? "active" : ""}`}
          onClick={handleMenuActive}
        >
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;

{
  /* <Link to={data.links}>{data.name}</Link> */
}
