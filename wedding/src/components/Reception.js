import React, { Component } from 'react'
import './Reception.css'

export class Reception extends Component {
    componentDidMount() {
        this.refs.reception.scrollIntoView()
    }

    OpenMap() {
        window.open(
            "https://www.google.com/maps/place/1000+University+Center+Ln,+Lawrenceville,+GA+30043/@33.9802512,-84.0067871,17z/data=!3m1!4b1!4m5!3m4!1s0x88f5be6c2c46c57b:0x206958d65c40ee2b!8m2!3d33.9802468!4d-84.0045984",
            "_blank"
        )
    }

    render() {
        return (
            <div className = "reception" ref =  "reception">
                <div className = 'padding'/>
                <div className = "image-wrapper-reception"/>
                <div className = "info-wrapper">
                    <h1>The Reception</h1>
                    <p id = "bold">4:30 PM - 10:00 PM</p>
                    <p>A Beautiful Banquet Hall</p>
                    <p>1000 Hall Rd.</p>
                    <p>Lawrenceville GA 30019</p>
                    <button id = "button" onClick = {this.OpenMap.bind(this)}>View Map</button>
                </div>
            </div>
        )
    }
}

export default Reception