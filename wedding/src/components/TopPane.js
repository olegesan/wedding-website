import React, {useRef, useState,useEffect} from "react";
import Header from './Header';
import MainPane from './MainPane';
import Scrollspy from 'react-scrollspy'
import StickyNavBar from './StickyNavBar';



function TopPane(){
    useEffect(() => {
        return () => {
            
          window.removeEventListener("scroll", () => handleScroll())
        }
      }, [])
    const [sticky,setSticky] = useState(false);
    const handleScroll = () => {
        if(stickyRef.current!=null){
            stickyRef.current.getBoundingClientRect().bottom < 0
                ? (setSticky(true))
                : setSticky(false)
        }
    }
    const stickyRef = useRef(null);
    window.addEventListener("scroll", handleScroll)
    return(
        <div id='TopPane'className='TopPane'>
                <Header/> 
                <MainPane stickyRef={stickyRef}/>
                <StickyNavBar sticky={sticky}/>
        </div>
    )
}
// window.pageYOffset >
export default TopPane;
