import React, { useEffect } from 'react';
import './App.css';
import Planet from './components/planet'
import 'react-datepicker/dist/react-datepicker.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Passengers from './components/passengers';
import Summary from './components/summary';
import Date from './components/date';

function App()  {

  useEffect(() => {
    Aos.init({ duration: 1500, delay: 100 });
  })

  return (
    <div className="App">
      <h1 id='planet-header' >Select destination</h1>
      <div id='planets'>
          <Planet name='Earth' imgSrc='assets/Earth.png' mass='5.97237E24' diameter='12 742' distance='149.60' speed='29.78'/>
          <Planet name='Moon' imgSrc='assets/Moon.png' mass='7.342E25' diameter='3 474,2' distance='150' speed='1.022'/>
          <Planet name='Mars' imgSrc='assets/Mars.png' mass='6,39E23' diameter='6 779' distance='228.5' speed='24.007'/>
      </div>
      <div id='date-box'>
        <div id='date-container'>
          <Date />
        </div>
      </div>
      <div id='passnegers-div'>
        <Passengers />
      </div>
      <div id='summary-container'>
        <Summary />
      </div>
      <div id='stars'></div>
    </div>
  );
}

export default App;