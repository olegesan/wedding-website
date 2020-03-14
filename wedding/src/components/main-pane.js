import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';
import './MainPane.css';

const SlideImages = [
    require('../res/couple1.jpg'),
    require('../res/couple2.jpg'),
    require('../res/couple3.jpg')
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
        return(
            <Slide {...properties} >

                <div className='each-slide'>
                    <div className={'background-tint'} style={{'backgroundImage': `url(${SlideImages[0]})`}}>
                    </div>
                </div><div className='each-slide'>
                    <div className={'background-tint'} style={{'backgroundImage': `url(${(SlideImages[1])})`}}></div>
                </div><div className='each-slide'>
                    <div className='background-tint' style={{'backgroundImage': `url(${SlideImages[2]})`}}></div>
                </div>
            </Slide>
            )
    }

}
export default MainPane;
