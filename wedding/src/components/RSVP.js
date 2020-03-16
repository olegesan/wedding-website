import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './RSVP.css'

export class RSVP extends Component {
    componentDidMount() {
        this.refs.rsvp.scrollIntoView()
    }

    getInfo () {
        var dict = {
            email       : this.email,
            firstName   : this.firstName,
            lastName    : this.lastName,
            attending : this.isAttending,
            guests   : this.numGuests
        }
        
        return(dict)
    }
    submitRSVP = (event) =>{
        console.log({...this.getInfo()});
        fetch('http://localhost:5000/emails/rsvp',({
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body:
             JSON.stringify({
                 ...this.getInfo()
             })
            
        }))
        .then(res=>{
            console.log(res)
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div className = "rsvp" ref = "rsvp">
                <div className = "form">
                    <div className = "info">
                        <h1>RSVP</h1>
                        <h2>for the wedding of</h2>
                        <h1>Oleg & Makayla</h1>
                        <span className = "line">____________________________________</span>
                        <h2>Details</h2>
                        <p>Saturday, March 14, 2020</p>
                        <p>5:00 PM</p>
                        <br/>
                        <h2>Ceremony & Reception</h2>
                        <p>A Beautiful Church</p>
                        <p>1000 Church Rd. Lawrenceville, GA 30019</p>
                        <span className = "line">_____________________________________</span>
                        <input type = "email" placeholder = "Email" onChange = {event => this.email = event.target.value}/>
                        <div id = "left">
                            <input type = "text" placeholder = "First Name" onChange = {event => this.firstName = event.target.value}/>
                        </div>
                        <div id = "right">
                            <input type = "text" placeholder = "Last Name" onChange = {event => this.lastName = event.target.value}/>
                        </div>
                        <select id = "isAttending" onChange = {event => this.isAttending = event.target.value}>
                            <option value = "" selected data-default>Are you attending?</option>
                            <option value = "yes">Yes</option>
                            <option value = "no">No</option>
                        </select>
                        <input type = "number" placeholder = "# of Guests" onChange = {event => this.numGuests = event.target.value}/>
                    </div>
                    <Link to = "/"><button className = "cancel">Cancel</button></Link>
                    <button className = "submit" onClick = {this.submitRSVP}>Submit</button>
                </div>
            </div>
        )
    }
}

export default RSVP