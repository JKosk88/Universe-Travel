import React, { Component } from 'react';
import { Link } from 'react-scroll';

export default class planet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgSrc: props.imgSrc,
            name: props.name,
            diameter: props.diameter,
            mass: props.mass,
            distance: props.distance
        };
        this.selectPlanet = this.selectPlanet.bind(this);
        this.in = this.in.bind(this);
        this.out = this.out.bind(this);
    }

    selectPlanet() {
        document.getElementById('summary-destination').innerText = 'You are going to the ' + this.state.name + '.';
        let description = document.getElementById('summary-description');
        switch (this.state.name){
            case 'Earth':
                description.innerText = "Earth, our home, is the third planet from the sun. It's the only planet known to have an atmosphere containing free oxygen, oceans of water on its surface and, of course, life. \nEarth is the fifth largest of the planets in the solar system. It's smaller than the four gas giants — Jupiter, Saturn, Uranus and Neptune — but larger than the three other rocky planets, Mercury, Mars and Venus.";
                break;
            case 'Moon' :
                description.innerText = "The moon is a cold, dry orb whose surface is studded with craters and strewn with rocks and dust (called regolith). The moon has no atmosphere. \nRecent lunar missions indicate that there might be some frozen ice at the poles.";
                break;
            case 'Mars' :
                description.innerText = "Mars is the fourth planet from the Sun and is the second smallest planet in the solar system. Named after the Roman god of war, Mars is also often described as the “Red Planet” due to its reddish appearance.\nMars is a terrestrial planet with a thin atmosphere composed primarily of carbon dioxide.";
        }
    }

    in (){
        document.getElementById(this.props.name + '-info').style.display = 'block';
        let planetImg = document.getElementById(this.props.name + '-img');
        planetImg.style.height = '50%';
        planetImg.style.width = '50%';
    }

    out (){
        document.getElementById(this.props.name + '-info').style.display = 'none';
        let planetImg = document.getElementById(this.props.name + '-img');
        planetImg.style.height = '100%';
        planetImg.style.width = '100%';
    }
    

    render(){
        return (
            <div id={this.props.name} className='planet-box'>
                <Link activeClass='active'
                    to='date-box'
                    smooth={true}
                    duration={1000}>
                    <img src={this.state.imgSrc} id={this.props.name + '-img'} className='planet' onClick={this.selectPlanet} alt={this.state.name}/>
                </Link>
                <div id='info-hover' onMouseEnter={this.in} onMouseOut={this.out}>
                    <div id='info-hover-2'>
                        i
                    </div>
                </div>
                <div id={this.props.name + '-info'} className='info'>
                    name: <b>{this.props.name}</b><br/>
                    diameter: <b>{this.props.diameter} km</b><br/>
                    mass: <b>{this.props.mass} kg</b><br/>
                    distance: <b>{this.props.distance} million km</b><br/>
                    orbital speed: <b>{this.props.speed} km/s</b>
                </div>
            </div>
        );
    }
}
