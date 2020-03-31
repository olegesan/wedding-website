import React ,{Component} from 'react';
import Header from './Header';
import StickyNavBar from './StickyNavBar';
import './Accommodations.css';

const img = require("../res/hotel.jpeg");
const hotel_names = [['Homewood Suites',
'https://www.hilton.com/en/hotels/atlhwhw-homewood-suites-atlanta-i-85-lawrenceville-duluth/',
'1725 Pineland Rd','Duluth, GA 30096', '(770) 931-9800'],
 ['Hampton','https://www.hilton.com/en/hotels/atlgwhx-hampton-suites-atlanta-duluth-gwinnett-county/','1775 N Brown Rd'
,'Lawrenceville, GA 30043', '(770) 277-1243']];
class Accommodations extends Component{
    componentDidMount() {
        this.refs.accommodations.scrollIntoView()
    }
    render(){
        const hotel_div = hotel_names.map((hotel_info,key)=>{
            
            return(
                <div key={key} className='hotel-container' >
                    <p className='hotel-name'>{hotel_info[0]}</p>
                    <p>{hotel_info[2]}</p>
                    <p>{hotel_info[3]}</p>
                    <p>{hotel_info[4]}</p>
                    <a className="hotel-button" target="_blank" rel="noopener noreferrer"href={`${hotel_info[1]}`}>
                    View</a>

                </div>    
            )

        })
        return(
            
            <div id='Accommodations'>
                <Header/>
                <StickyNavBar/>
                <span className='capture' ref='accommodations'>Lay down your head.</span>
                <span className='accommodations-capture-small'>These nice hotels will treat your well.</span>
                <div className='accommodations-img background-tint' style={{'backgroundImage':`url('${img}')`}}/>
                <div className='accommodations-pane-parent'>
                    <div className='accommodations-pane' >
                        {hotel_div}
                    </div>
                </div>
                
                
            </div>
        )
    }


}
export default Accommodations;