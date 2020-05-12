import React, { useEffect } from 'react';
import './App.css';
import Planet from './components/planet'
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from 'react-scroll';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Passengers from './components/passengers';
import Summary from './components/summary';
import Date from './components/date';

function App() {

  useEffect(() => {
    Aos.init({ duration: 1500, delay: 100 });
  })

  return (
    <div className="App">
      <h1 id='planet-header'>Select destination</h1>
      <div id='planets'>
          <Planet name='Earth'/>
          <Planet name='Moon'/>
          <Planet name='Mars'/>
      </div>
      <div id='date-box'>
        <div id='date-container'>
          <Date />
        </div>
      </div>
      <div data-aos='fade-left' id='passnegers-div'>
        <Passengers />
      </div>
      <div data-aos='fade-left' id='summary-container'>
        <Summary />
      </div>
      <div id='stars'></div>
    </div>
  );
}

export default App;