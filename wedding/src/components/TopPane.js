import React from "react";
import Header from './Header';
import MainPane from './MainPane';


function TopPane(){
    return(
        <div className='TopPane'>
            <Header/>
            <MainPane/>
        </div>
    )
}
export default TopPane;
