import React from 'react'
import Hero from '../components/Hero'
import heroBg from '../assets/images/pexels-pixabay-414645.jpg'
import './css/About.css'

import coffeePic from '../assets/images/pexels-valeriia-miller-3361170.jpg'

const About = () => {

  let heroTitle = "About us"

  return (
    <div>
      <Hero 
        image={heroBg}
        title={heroTitle}>
      </Hero>
      <div className='container about-content'>
        <p>Our Roasters was started in September 2022 in Debrecen, Hungary with the aim to roast specialty coffee which at that time only a handful of roasters did in Hungary. After six months of test roasting we reached a point in spring 2023, that we could put publicly into the grinder our first coffee and serve it to people.</p>
        <div className='roundedPic' style={{'backgroundImage':`url("${coffeePic}")`}}></div>
        <p> Since then we continuously are in search of the best coffees which we always try to source seasonally and through our roasting we try to bring out the best flavour each coffee has to provide. We look forward working with quality oriented coffeeshops who has the focus on the coffee and the barista.</p>
      </div>
    </div>
  )
}

export default About