import React, { Component, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './RSVP.css'

export class RSVP extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            firstName:'',
            lastName:'',
            attending:'',
            guests:'',
            suggestions:''
        }
    }
    componentDidMount() {
        this.refs.rsvp.scrollIntoView()
    }
    getInfo () {
        var dict = {
            email : this.state.email,
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            attending : this.state.attending,
            guests : this.state.guests,
            message : this.state.suggestions
        }
        return(dict)
    }
    submitRSVP = (event) =>{
        fetch('/emails/rsvp',({
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
            console.log(res.ok)
            if(res.ok){
                this.reset_form();
            }
        })
    }
    reset_form = () =>{
        this.setState({email:'',
        firstName:'',
        lastName:'',
        guests:'',
        attending:'',
        suggestions:''
    })
    }
    scrollToTop() {
        useEffect(() => {
            window.scrollTo(0,0)
        }, [])
    }
    render() {
        return (
            <div id='RSVP' className = "rsvp" ref = "rsvp">
                <div className = "form">
                    <div className = "info">
                    <h1>RSVP</h1>
                        <h2>for the wedding of</h2>
                        <h1>Oleg & Makayla</h1>
                        <hr className = "line"/>
                        <h2>Details</h2>
                        <p>Saturday, March 14, 2020</p>
                        <p>5:00 PM</p>
                        <br/>
                        <h2>Ceremony & Reception</h2>
                        <p>A Beautiful Church</p>
                        <p>1000 Church Rd. Lawrenceville, GA 30019</p>
                        <hr className = "line"/>
                        <div className='form-wrapper'>
                            <input className='one' type = "email" placeholder = "Email" value={this.state.email} onChange = {(event)=>{this.setState({email:event.target.value})}}/>
                            <div className="input-line">
                                <input id='firstName'type = "text" placeholder = "First Name" value={this.state.firstName} onChange = {(event)=>{this.setState({firstName:event.target.value})}}/>
                                <input id='lastName'type = "text" placeholder = "Last Name" value={this.state.lastName} onChange = {(event)=>{this.setState({lastName:event.target.value})}}/>
                            </div>
                            <select id = "isAttending" value={this.state.attending}onChange = {(event)=>{this.setState({attending:event.target.value})}}>
                                <option value = "" selected data-default>Are you attending?</option>
                                <option value = "yes">Yes</option>
                                <option value = "no">No</option>
                            </select>
                            <input className='one'type = "number" placeholder = "# of Guests" value={this.state.guests} onChange = {(event)=>{this.setState({guests:event.target.value})}}/>
                            <textarea placeholder = "Suggestions" rows = "4" cols = "30" value={this.state.suggestions} onChange  = {event => {this.setState({suggestions:event.target.value})}}></textarea>
                        </div>
                    </div>
                    <Link to = "/"><button className = "cancel button-rsvp" onClick = "scrollToTop()">Cancel</button></Link>
                    <button className = "submit button-rsvp" onClick = {this.submitRSVP}>Submit</button>
                    </div>
            </div>
        )
    }
}

export default RSVP