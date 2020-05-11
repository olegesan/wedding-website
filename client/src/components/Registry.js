import React ,{Component} from 'react';
import Header from './Header';
import StickyNavBar from './StickyNavBar';
import './Registry.css';

const img = require("../res/om_registry.jpg");
const store_names = [['amazon','https://www.amazon.com/wedding'],
['target','https://www.target.com/gift-registry/wedding-registry']];
class Registry extends Component{
    componentDidMount() {
        this.refs.registry.scrollIntoView()
    }
    render(){
        const stores_div = store_names.map((store_info,key)=>{
            let store_img = require(`../res/${store_info[0]}.png`)
            return(
                <div key={key} className='store-container' >
                    <a href={`${store_info[1]}`}>
                    <img src={store_img} alt={`${store_info[0]} store logo`}/>
                    </a>
                </div>    
            )

        })
        return(
            
            <div id='Registry'>
                <Header/>
                <StickyNavBar/>
                <span className='capture' ref='registry'>We are starting small!</span>
                <span className='registry-capture-small'>And hope you could help us :)</span>
                <div className='registry-img background-tint' style={{'backgroundImage':`url('${img}')`}}/>
                <div className='registry-pane-parent'>
                    <p className='registry-pane-text'> Here are a few stores we registred wtih:</p>
                    <div className='registry-pane'>
                        {stores_div}
                    </div>
                </div>
                
                
            </div>
        )
    }


}
export default Registry;