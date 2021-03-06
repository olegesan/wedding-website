import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';
import './MainPane.css';

const SlideImages = [
    require('../res/couple1.jpg'),
    require('../res/couple2.jpg'),
    require('../res/couple3.jpg'),    
]
const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
  }
  
class MainPane extends Component{
    
    render(){
        const slides = SlideImages.map((img, key)=>{
            return (
                <div className={'each-slide'}>
                    <div key={key} className={'background-tint'} style={{'backgroundImage': `url(${img})`}}>

                    </div>
                </div>
            )
        })
        return(
            <div ref={this.props.stickyRef}>
                <span className={'capture'}>We're Engaged!</span>
                <Slide {...properties} >

                    {slides}
                </Slide>
            </div>
            )
    }

}
export default MainPane;
