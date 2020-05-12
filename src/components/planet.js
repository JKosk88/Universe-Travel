import React, { Component } from 'react';
import { Link } from 'react-scroll';

export default class planet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgSrc: props.imgSrc,
            name: props.name,
        };
        this.selectPlanet = this.selectPlanet.bind(this);
    }

    selectPlanet() {
        document.getElementById('summary-destination').innerText = 'You are going to the ' + this.state.name + '.';
    }
    

    render(){
        return (
            <div id={this.props.name}>
                <Link activeClass='active'
                    to='date-box'
                    smooth={true}
                    duration={1000}>
                    <img src={this.state.imgSrc} className='planet' onClick={this.selectPlanet}/>
                </Link>
            </div>
        );
    }
}
