import React, { Component } from 'react';

var description = false;

export default class planet extends Component {

    render(){
        return (
            <div id='summary'>
                <div id='summary-top'>
                    <h1>Congratulations!</h1>
                    <h3>You are going to fly to the universe.</h3>
                </div>
                <div id='summary-bottom'>
                    <div className='summary-content'>
                        <img src='assets/planet.png' className='summary-img' alt='summary-planet' />
                        <p id='summary-destination'>Maybe Mars? Or Moon? You choose!</p>
                    </div>
                    <div className='summary-content'>
                        <img src='assets/calendar.png' className='summary-img' alt='summary-date' />
                        <p id='summary-date'>You haven't selected any date. Does it mean you want to fly today?</p>
                    </div>
                    <div className='summary-content'>
                        <img src='assets/people.png' className='summary-img' alt='summary-passengers' />
                        <p id='summary-passengers'>Going alone? Take friends with you!</p>
                    </div>
                    <div className='summary-content'>
                        <div id='summary-description-box'>
                            <p id='summary-description'></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}