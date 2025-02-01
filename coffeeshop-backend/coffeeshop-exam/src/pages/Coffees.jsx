import React, {useState, useEffect} from 'react'
import Hero from '../components/Hero'
import CoffeeCard from '../components/CoffeeCard'
import homeHeroBg from '../assets/images/pexels-tom-swinnen-1309778.jpg'

import './css/Coffees.css'

const Coffees = () => {
  const [Coffees, setCoffees] = useState([]); // Coffees state

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/coffees/')
      .then(response => response.json())
      .then(data => setCoffees(data))
      .catch((error) => console.error('Error fetching articles:', error));
  }, [])

  const heroTitle = "See our coffees"
  const heroText = "We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door."
  
  return (
    <section>
      <Hero 
        image={homeHeroBg}
        title={heroTitle}
        text={heroText}>
      </Hero>
      
      <div className='container coffees'>
        <h1>Never trust anyone who doesn't drink coffee</h1>
        <div className='coffee-list' id="coffee-list">
        {Coffees.map(coffee => (
          <CoffeeCard 
            key={coffee.id} 
            coffee={coffee} 
          />
        ))}
        </div>
      </div>
    </section>
  )
}

export default Coffees