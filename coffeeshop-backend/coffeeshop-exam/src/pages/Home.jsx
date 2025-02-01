import React from 'react'
import Hero from '../components/Hero'
import homeHeroBg from '../assets/images/pexels-chevanon-photography-302905.jpg'
import WhyUs from '../components/WhyUs'
import HowItWorks from '../components/HowItWorks'

const Home = () => {
  let heroTitle = "Great coffee made simple."
  let heroText = "Start your mornings with the world's best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule."
  return (
    <div>
      <Hero 
        image={homeHeroBg}
        title={heroTitle}
        text={heroText}
        button={{text: "Check out our coffees", target:"/coffees"}}>
      </Hero>
      <WhyUs/>
      <HowItWorks/>
    </div>
  )
}

export default Home