import React, { Component } from 'react';
import { Link } from 'react-scroll';

export default class planet extends Component {

    changeValue(){
        var slider = document.getElementById('passenger-input');
        var output = document.getElementById('passenger-quantity');

        output.innerHTML = slider.value;
       
        var pass = (document.getElementById('passenger-input').value);
        document.getElementById('summary-passengers').innerText = 'You and ' + (pass-1) + ' your friends.';
    }

    render(){
        return (
            <div id='passengers'>
                <h1 id='passenger-header'>Select number of passengers</h1>
                <div id='passenger-container'>
                    <div id='passenger-quantity'>2</div>
                    <img src='assets/astronaut.png' id='passenger-icon' alt='astronaut-passenger' />
                    <input onInput={this.changeValue} type="range" id='passenger-input' max='10' min='1' defaultValue='2' className='slider' />
                </div>

                <Link activeClass='active'
                to='summary'
                spy={true}
                smooth={true}
                duration={1000}>
                    <button type='button' id='passenger-button' className='button'>Finish</button>
                </Link>
            </div>
        );
    }
}
