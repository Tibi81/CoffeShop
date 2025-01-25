import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import './css/Navbar.css'

import CoffeeBean from '../assets/CoffeeBean'

import "./css/Hamburger.css";

let menu_items = [
  { name: "Home", link: "/"},
  { name: "About us", link: "/about" },
  { name: "See our coffees", link: "/coffees" },
];

const Navbar = () => {
  const [mobile, setDeviceChange] = useState(window.innerWidth < 768);

  const changeDevice = () => {
    if (window.innerWidth < 768) {
      setDeviceChange(true);
    } else {
      setDeviceChange(false);
    }
  };
  window.addEventListener("resize", changeDevice);

  return (
    <nav>
      <div className="container">
        <div className='logo-holder'>
          <CoffeeBean width={30} fill={"#0D8582"}/>
          coffeeroasters
        </div>
        <div className='link-holder'>
          {mobile ? <MobileNavbar /> : <DesktopNavbar />}
        </div>
      </div>
    </nav>
  );
};

const DesktopNavbar = () => {
  let generated_list = [];

  menu_items.forEach((item, index, array) => {
    generated_list.push(
      <li key={index}>
        <Link
          className={item.current ? "actual" : ""}
          to={item.link}
          onClick={() => {
            array.forEach((resetitem) => {
              resetitem.current = false;
            });
            item.current = true;
          }}
        >
          {item.name}
        </Link>
      </li>
    );
  });

  return <ul>{generated_list}</ul>;
};

const MobileNavbar = () => {
  let [openMobileNavbar, switchMobileNavbar] = useState(false);
  let generated_list = [];

  menu_items.forEach((item, index, array) => {
    generated_list.push(
      <li key={index}>
        <Link
          onClick={() => {
            array.forEach((resetitem) => {
              resetitem.current = false;
            });
            item.current = true;
            switchMobileNavbar(false);
          }}
          to={item.link}
        >
          {item.name}
        </Link>
      </li>
    );
  });
  return (
    <div id="my-mobile-navbar">
      <HamburgerIcon
        xhamburger={openMobileNavbar}
        onChange={switchMobileNavbar}
      />

      <div className={"mobile-navbar " + (openMobileNavbar ? "open" : "close")}>
        <ul>{generated_list}</ul>
      </div>
    </div>
  );
};

function HamburgerIcon(props) {
  return (
    <div
      onClick={() => {
        props.onChange(!props.xhamburger);
      }}
      className={props.xhamburger ? "hamburger x-hamburger" : "hamburger"}
    >
      <div></div>
    </div>
  );
}

export default Navbar;