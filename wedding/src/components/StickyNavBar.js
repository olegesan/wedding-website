import React, {Component} from 'react';
import Scrollspy from 'react-scrollspy';
import './StickyNavBar.css'
class StickyNavBar extends Component{
    constructor(props){
        super(props)
        this.state = {
            sticky:this.props.sticky
        }
    }
    render(){
        return(
            <div className={`${this.props.sticky?"show":'hidden'} scrollspy`} style={{'position':'fixed','top':'0px'}} id='StickyNavBar'>
                <Scrollspy  items={ ['TopPane', 'Ceremony', 'Reception','Afterparty','Regestry','RSVP'] } currentClassName="is-current">
                    <span><a href="/#TopPane" >Top</a></span>
                    <span><a href="/#Ceremony" >Ceremony</a></span>
                    <span><a href="/#Reception" >Reception</a></span>
                    <span><a href="/#Afterparty" >Afterparty</a></span>
                    <span><a href="/Regestry" >Regestry</a></span>
                    <span><a href="/RSVP" >RSVP</a></span>
                </Scrollspy>
            </div>
        )
    }
}
export default StickyNavBar;