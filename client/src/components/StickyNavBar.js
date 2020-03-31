import React, { useState, useEffect } from 'react';
import Scrollspy from 'react-scrollspy';
import './StickyNavBar.css'


function StickyNavBar (props){
    const[sticky, setSticky] = useState(false);
    const[beenSticky, setBeenSticky] = useState(false);
    useEffect(()=>{
        if (props.sticky){
            setSticky(true)
            setBeenSticky(true)
        }else{
            setSticky(false)
        }
    },[props.sticky])
        let sticky_state = () =>{
            if(!beenSticky){
                return 'none'
            }
            else if (sticky){
                return 'show'
            }else{
                return 'hidden'
            }
        }
        return(
            <div className={`${sticky_state()} scrollspy`} style={{'position':'fixed','top':'0px'}} id='StickyNavBar'>
                <Scrollspy  items={ ['TopPane', 'Ceremony', 'Reception','Afterparty','Accomodations','Registry','RSVP'] } currentClassName="is-current">
                    <span><a href="/#TopPane" >Top</a></span>
                    <span><a href="/#Ceremony" >Ceremony</a></span>
                    <span><a href="/#Reception" >Reception</a></span>
                    <span><a href="/#Afterparty" >Afterparty</a></span>
                    <span><a href="/accommodations" >Accommodations</a></span>
                    <span><a href="/registry" >Registry</a></span>
                    <span><a href="/RSVP" >RSVP</a></span>
                </Scrollspy>
            </div>
        )
    }
export default StickyNavBar;