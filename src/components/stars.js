import React, { Component } from 'react';

export default class stars extends Component {
    constructor(props) {
        super(props);
        this.state = {
            starsAnimation: true,
            astronautAnimation: true,
        };
        this.animateStars = this.animateStars.bind(this);
        this.animateAstronaut = this.animateAstronaut.bind(this);
    }

    animateStars(){

        var list1n = document.querySelectorAll("#stars div:nth-child(3n)");
        var list2n = document.querySelectorAll("#stars div:nth-child(3n + 1)");
        var list3n = document.querySelectorAll("#stars div:nth-child(3n + 2)");

        if (this.state.starsAnimation){

            list1n.forEach(element => {
                element.style.animation = 'animateStars1n 1.2s ease-in-out alternate infinite';
            });

            list2n.forEach(element => {
                element.style.animation = 'animateStars2n 1.5s ease-in-out alternate infinite';
            });

            list3n.forEach(element => {
                element.style.animation = 'animateStars1n 1.7s ease-in-out alternate infinite';
            });

        } else {

            list1n.forEach(element => {
                element.style.animation = '';
            });

            list2n.forEach(element => {
                element.style.animation = '';
            });

            list3n.forEach(element => {
                element.style.animation = '';
            });

        }

        this.setState({ starsAnimation: !this.state.starsAnimation })
    }

    animateAstronaut(){
        if (this.state.astronautAnimation){
            document.querySelector("#astronaut").style.opacity = "0";
        } else {
            document.querySelector("#astronaut").style.opacity = "100";
        }
        this.setState({ astronautAnimation: !this.state.astronautAnimation })
    }
    
    render(){
        return(
            <div id='checkbox-body'>
                <span>Animate stars</span>
                <label className="switch">
                    <input type="checkbox"/>
                    <span className="animation-slider round" onClick={this.animateStars}></span>
                </label>
                <span>Animate Astronaut</span>
                <label className="switch">
                    <input type="checkbox" checked={this.state.astronautAnimation}/>
                    <span className="animation-slider round" onClick={this.animateAstronaut}></span>
                </label>
            </div>
        )
    }
}
