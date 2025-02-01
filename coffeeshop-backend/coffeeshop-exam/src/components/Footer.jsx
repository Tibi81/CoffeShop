import React from 'react';
import CoffeeBean from '../assets/CoffeeBean';
import { Link } from 'react-router-dom';

import './css/Footer.css'

import facebook from '../assets/icons/facebook.svg';
import twitter from '../assets/icons/twitter.svg';
import instagram from '../assets/icons/instagram.svg';

const Footer = () => {
  return (
    <footer className='container'>
      <div className='logo-holder'>
        <CoffeeBean fill={"#0D8582"} width={"32px"} />
        coffeeroasters
      </div>

      <div className='link-holder'>
        <Link to="/">Home</Link>
        <Link to="/about">About us</Link>
        <Link to="/coffees">See our coffees</Link>
      </div>

      <div className='social'>
        <img src={facebook} alt="facebook" />
        <img src={twitter} alt="twitter" />
        <img src={instagram} alt="instagram" />
      </div>
    </footer>
  );
}

export default Footer;
