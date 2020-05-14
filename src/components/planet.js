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
