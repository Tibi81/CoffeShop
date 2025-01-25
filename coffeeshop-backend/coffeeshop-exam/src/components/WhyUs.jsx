import React from 'react'
import './css/WhyUs.css'

import best_quality_icon from "../assets/icons/mug-hot-solid.svg"

import benefits_icon from "../assets/icons/gift-solid.svg"

import shipping_icon from "../assets/icons/truck-fast-solid.svg"

const WhyUs = () => {
  return (
    <div className='container why-us-holder'>
        <br />
        <section  className='why-us'>
            <h1>Why choose us?</h1>
            <p>A large part of our role is choosing which particular coffees will be featured in our range. This means working closely with the best coffee growers to give you a more impactful experience on every level.</p>

            <div className='why-us-cards'>
                <WhyUsCard 
                    icon={best_quality_icon}
                    title={"Best quality"}
                    text={"Discover an endless variety of the world's best artisan coffee from each of our roasters."}
                />

                <WhyUsCard 
                    icon={benefits_icon}
                    title={"Exclusive benefits"}
                    text={"Special offers and swag when you subscribe, including 30% off your first shipment."}
                />

                <WhyUsCard 
                    icon={shipping_icon}
                    title={"Free shipping"}
                    text={"We cover the cost and coffee is delivered fast. Peak freshness: guaranteed."}
                />
            </div>
        </section>
    </div>
  )
}

const WhyUsCard = (props) => {
    let {icon, title, text} = props
    return (<div className='why-us-card'>
        <img src={icon} alt={title + " icon"}/>
        <h2>{title}</h2>
        <p>{text}</p>
    </div>)
}

export default WhyUs