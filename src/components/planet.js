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
            distance: props.distance,
            sols: [],
            marsTemps: [],
            marsWindSpeed: [],
            marsPressure: [],
            days: [],
            earthTemps: [],
            earthWindSpeed: [],
            earthPressure: [],
            moonPhase: [],
            moonTemps: [],
            moonPressure: [],
            moonWindSpeed:[]
        };
        this.selectPlanet = this.selectPlanet.bind(this);
        this.in = this.in.bind(this);
        this.out = this.out.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount(){
        let sols = [];
        let marsTemps = [];
        let marsWindSpeed = [];
        let marsPressure = [];
        let days = [];
        let earthTemps = [];
        let earthWindSpeed = [];
        let earthPressure = [];
        let moonPhase = [];
        let moonTemps = [];
        let moonPressure = [];
        let moonWindSpeed = [];
        let proxyURL = 'https://cors-anywhere.herokuapp.com/';
        let url = proxyURL + 'https://api.darksky.net/forecast/7a31a719515942165dd6e87e76096fb4/50.049683,%2019.944544?units=si';

        switch(this.props.name){
            case 'Earth':

                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        const daysLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

                        for (let i = 0; i < 3; i++){
                            const date = new Date(data.daily.data[i].time * 1000);

                            days.push(daysLabels[date.getDay()]);

                            earthTemps.push((data.daily.data[i].temperatureHigh).toString());
                            earthWindSpeed.push(data.daily.data[i].windSpeed);
                            earthPressure.push(data.daily.data[i].pressure);
                        }

                        this.setState({ days: days, earthPressure: earthPressure, earthTemps: earthTemps, earthWindSpeed: earthWindSpeed });

                    });

                break;
            case 'Moon':
                
                fetch(url)
                    .then(response => response.json())
                    .then(data => {

                        for (let i = 0; i < 3; i++){
                            moonPhase.push( ( data.daily.data[i].moonPhase ) * 100 + '%' );
                            moonTemps.push( ( ( data.daily.data[i].moonPhase ) * 127 ).toFixed(2) );
                            moonPressure.push('1e-10');
                            moonWindSpeed.push('0');
                        }

                        this.setState({ moonPhase: moonPhase, moonTemps: moonTemps, moonWindSpeed: moonWindSpeed, moonPressure: moonPressure });

                    });
                break;
            case 'Mars':

                fetch('https://api.nasa.gov/insight_weather/?api_key=m0qReTofA1jgBbqMvFEoC4j6WdfjAn6hcnOjSYfK&feedtype=json&ver=1.0')
                    .then(response => response.json())
                    .then(data => {
                        
                        sols = [...data.sol_keys];

                        for (let i = 0; i < 3; i++){
                            marsTemps.push( Math.round( data[sols[i]].AT.av * 100) / 100 );
                            marsWindSpeed.push( Math.round( (data[sols[i]].HWS.av)*360) / 100 );
                            marsPressure.push( Math.round( data[sols[i]].PRE.av / 1000 * 1000) / 1000 );

                            sols[i] = 'Sol ' + sols[i];
                        }

                        this.setState({ marsTemps: marsTemps, marsWindSpeed: marsWindSpeed, marsPressure: marsPressure, sols: sols });

                    });

                break;
            default:
                console.error('missmatched planet name');
        }
    }

    selectPlanet() {
        document.getElementById('summary-destination').innerText = 'You are going to the ' + this.state.name + '.';
        let description = document.getElementById('summary-description');
        switch (this.state.name){
            case 'Earth':
                description.innerText = "Earth, our home, is the third planet from the sun. It's the only planet known to have an atmosphere containing free oxygen, oceans of water on its surface and, of course, life. Earth is the fifth largest of the planets in the solar system. It's smaller than the four gas giants — Jupiter, Saturn, Uranus and Neptune — but larger than the three other rocky planets, Mercury, Mars and Venus.";
                break;
            case 'Moon' :
                description.innerText = "The moon is a cold, dry orb whose surface is studded with craters and strewn with rocks and dust (called regolith). The moon has no atmosphere. Recent lunar missions indicate that there might be some frozen ice at the poles.";
                break;
            case 'Mars' :
                description.innerText = "Mars is the fourth planet from the Sun and is the second smallest planet in the solar system. Named after the Roman god of war, Mars is also often described as the “Red Planet” due to its reddish appearance.Mars is a terrestrial planet with a thin atmosphere composed primarily of carbon dioxide.";
                break;
            default:
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

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
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

                    <ul id='topList'>
                        <li>name: <b>{this.props.name}</b></li>
                        <li>diameter: <b>{this.props.diameter} km</b></li>
                        <li>mass: <b>{this.props.mass} kg</b></li>
                        <li>distance: <b>{this.props.distance} million km</b></li>
                        <li>orbital speed: <b>{this.props.speed} km/s</b></li>
                        <li>weather:</li>
                        <ul>
                            <li>{this.state.sols[0]}{this.state.days[0]}{this.state.moonPhase[0]}:</li>
                            <ul><b>
                                <li>{this.state.marsTemps[0]}{this.state.earthTemps[0]}{this.state.moonTemps[0]} °C</li>
                                <li>{this.state.marsWindSpeed[0]}{this.state.earthWindSpeed[0]}{this.state.moonWindSpeed[0]} km/h</li>
                                <li>{this.state.marsPressure[0]}{this.state.earthPressure[0]}{this.state.moonPressure[0]} kPa</li>
                            </b></ul>
                            <li>{this.state.sols[1]}{this.state.days[1]}{this.state.moonPhase[1]}:</li>
                            <ul><b>
                                <li>{this.state.marsTemps[1]}{this.state.earthTemps[1]}{this.state.moonTemps[1]} °C</li>
                                <li>{this.state.marsWindSpeed[1]}{this.state.earthWindSpeed[1]}{this.state.moonWindSpeed[1]} km/h</li>
                                <li>{this.state.marsPressure[1]}{this.state.earthPressure[1]}{this.state.moonPressure[1]} kPa</li>
                            </b></ul>
                            <li>{this.state.sols[2]}{this.state.days[2]}{this.state.moonPhase[2]}:</li>
                            <ul><b>
                                <li>{this.state.marsTemps[2]}{this.state.earthTemps[2]}{this.state.moonTemps[2]} °C</li>
                                <li>{this.state.marsWindSpeed[2]}{this.state.earthWindSpeed[2]}{this.state.moonWindSpeed[2]} km/h</li>
                                <li>{this.state.marsPressure[2]}{this.state.earthPressure[2]}{this.state.moonPressure[2]} kPa</li>
                            </b></ul>
                        </ul>
                    </ul>

                </div>
            </div>
        );
    }
}
