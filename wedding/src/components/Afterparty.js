import React, { Component } from 'react'
import './Afterparty.css'

export class Afterparty extends Component {
    OpenMap() {
        window.open(
            "https://www.google.com/maps/place/1000+University+Center+Ln,+Lawrenceville,+GA+30043/@33.9802512,-84.0067871,17z/data=!3m1!4b1!4m5!3m4!1s0x88f5be6c2c46c57b:0x206958d65c40ee2b!8m2!3d33.9802468!4d-84.0045984",
            "_blank"
        )
    }

    render() {
        return (
            <div className = "afterparty">
                <div className = 'padding'/>
                <div className = "image-wrapper-afterparty"/>
                <div className = "info-wrapper">
                    <h1>The Afterparty</h1>
                    <p id = "bold">10:00 PM - 2:00 AM</p>
                    <p>A Gorgeous House</p>
                    <p>1000 House Rd.</p>
                    <p>Lawrenceville GA 30019</p>
                    <button id = "button" onClick = {this.OpenMap.bind(this)}>View Map</button>
                </div>
            </div>
        )
    }
}

export default Afterparty