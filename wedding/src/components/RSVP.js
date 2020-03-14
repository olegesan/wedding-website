import React from 'react'
import './RSVP.css'

export const RSVP = props => {
    return (
        <div className = "rsvp">
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
                    <input type = "email" placeholder = "Email"/>
                    <div id = "left">
                        <input type = "text" placeholder = "First Name"/>
                    </div>
                    <div id = "right">
                        <input type = "text" placeholder = "Last Name"/>
                    </div>
                    <select id = "isAttending">
                        <option value = "" selected data-default>Are you attending?</option>
                        <option value = "yes">Yes</option>
                        <option value = "no">No</option>
                    </select>
                    <input type = "number" placeholder = "# of Guests"/>
                </div>
                <button className = "cancel">Cancel</button>
                <button className = "submit">Submit</button>
            </div>
        </div>
    )
}

export default RSVP