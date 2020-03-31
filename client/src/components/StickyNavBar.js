import React, { Component, useState, useEffect } from 'react';
import Scrollspy from 'react-scrollspy';
import './StickyNavBar.css'


function StickyNavBar (props){
    const[sticky, setSticky] = useState(false);
    useEffect(()=>{
        if (props.sticky){
            setSticky(true)
        }else{
            setSticky(false)
        }
    })
        let sticky_state = () =>{
            if (sticky){
                return 'show'
            }else{
                return 'hidden'
            }
        }
        return(
            <div className={`${sticky_state()} scrollspy`} style={{'position':'fixed','top':'0px'}} id='StickyNavBar'>
                <Scrollspy  items={ ['TopPane', 'Ceremony', 'Reception','Afterparty','Accomodations','Regestry','RSVP'] } currentClassName="is-current">
                    <span><a href="/#TopPane" >Top</a></span>
                    <span><a href="/#Ceremony" >Ceremony</a></span>
                    <span><a href="/#Reception" >Reception</a></span>
                    <span><a href="/#Afterparty" >Afterparty</a></span>
                    <span><a href="/accommodations" >Accommodations</a></span>
                    <span><a href="/registry" >Regestry</a></span>
                    <span><a href="/RSVP" >RSVP</a></span>
                </Scrollspy>
            </div>
        )
    }
export default StickyNavBar;