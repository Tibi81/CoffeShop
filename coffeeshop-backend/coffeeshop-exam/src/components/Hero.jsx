import React from 'react'
import './css/Hero.css'
import { Link } from 'react-router-dom'

const Hero = (props) => {
    let {title, text, image, button} = props
    console.log(image)
  return (
    <div className='container hero' style={
        {'background' : `url(${image})`}
    }>
        <h1>{title}</h1>
        <p>{text}</p>
        {button ? <Link to={button.target}>{button.text}</Link> : <></>}
    </div>
  )
}

export default Hero