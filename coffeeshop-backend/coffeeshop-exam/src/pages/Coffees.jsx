import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import homeHeroBg from '../assets/images/pexels-tom-swinnen-1309778.jpg';
import CoffeeCard from '../components/CoffeeCard';

import './css/Coffees.css';

const Coffees = () => {
  let heroTitle = "See our coffees";
  let heroText = "We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.";

  // Coffees state létrehozása
  const [coffees, setCoffees] = useState([]);
  const [loading, setLoading] = useState(true); // Állapot a betöltési folyamat jelzésére
  const [error, setError] = useState(null); // Hiba állapot kezelése

  useEffect(() => {
    // API hívás a kávék lekéréséhez
    fetch('http://localhost:8000/api/coffees/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch coffees');
        }
        return response.json();  // A válasz JSON formátumban
      })
      .then(data => {
        setCoffees(data);  // A sikeres válasz után beállítjuk a kávékat
        setLoading(false);  // Beállítjuk, hogy a betöltés befejeződött
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(error.message);  // Ha hiba történik, azt eltároljuk
        setLoading(false);  // Betöltés befejezése, hiba esetén is
      });
  }, []);  // Üres dependency array, hogy csak egyszer fusson le

  return (
    <section>
      <Hero
        image={homeHeroBg}
        title={heroTitle}
        text={heroText}
      />

      <div className='container coffees'>
        <h1>Never trust anyone who doesn't drink coffee</h1>

        {/* Betöltés közbeni állapot */}
        {loading && <p>Loading coffees...</p>}

        {/* Hiba esetén megjelenítjük a hibát */}
        {error && <p>Error: {error}</p>}

        <div className='coffee-list' id="coffee-list">
          {/* Ha vannak kávék, akkor rendereljük őket */}
          {!loading && !error && coffees.length > 0 ? (
            coffees.map(coffee => (
              <CoffeeCard key={coffee.id} coffee={coffee} />
            ))
          ) : (
            !loading && !error && <p>No coffees available</p>  // Ha nincs kávé
          )}
        </div>
      </div>
    </section>
  );
}

export default Coffees;
