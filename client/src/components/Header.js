import React, { Component } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

export class Header extends Component {
    constructor(props) {
        super (props)
        this.state = {
            checked: false
        }
        this.handleKeyPress = this.handleKeyPress.bind(this)
        this.toggler = React.createRef()
    }
    
    handleMobileMenu = async e =>{
        
        if (!this.state.checked){
            this.setState({checked:true})
        }else{
            await new Promise((res,rej)=>{setTimeout(res,400)})
            this.setState({checked:false})
        }
    }
    handleKeyPress(e) {
        if (e.key === "Enter") {
            this.props.handleKeyPress(e.target.value)
        }
    }

    render() {
        return (
            <header id = "header" role = "banner">
                <div className = "header-inner">
                    <div id = "site-title-wrapper" data-content-field = "site-title">
                        <h1 id = "site-title">
                            <Link to = "/">Oleg & Makayla</Link>
                        </h1>
                    </div>
                    <div id = "header-nav">
                        <div id = "header-nav-wrapper">
                            <div className = "nav-left">
                                <nav className = "nav-bar">
                                    <div className = "nav-item">
                                        <a href= "#Ceremony">Ceremony</a>
                                    </div>
                                    <div className = "nav-item">
                                        <a href="#Reception">Reception</a>
                                    </div>
                                    <div className = "nav-item">
                                        <a href="#Afterparty">Afterparty</a>
                                    </div>
                                </nav>
                            </div>
                            <div className = "nav-right">
                                <nav className = "nav-bar">
                                    <div className = "nav-item">
                                        <Link to = "/Accommodations">Accommodations</Link>
                                    </div>
                                    <div className = "nav-item">
                                        <Link to = "/Registry">Registry</Link>
                                    </div>
                                    <div className = "nav-item">
                                        <Link to = "/RSVP">RSVP</Link>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "header-mobile">
                    <div id = "site-title-wrapper" data-content-field = "site-title">
                        <h1 id = "site-title" onClick={this.state.checked?this.handleMobileMenu:null}>
                            <Link to = "/" data-shrink-original-size = "30">Oleg & Makayla</Link>
                        </h1>
                    </div>

                    <div class="menu-wrap">
                        <input type = "checkbox" className = "toggler" ref = {this.toggler} checked={this.state.checked} onClick={this.handleMobileMenu}/>
                        <div class="hamburger">
                            <div></div>
                        </div>
                        <div class="menu">
                            <div>
                                <div>
                                    <ul>
                                        <li onClick={this.handleMobileMenu}><a href="#Ceremony">Ceremony</a></li>
                                        <li onClick={this.handleMobileMenu}><a href="#Reception">Reception</a>
                                        <li onClick={this.handleMobileMenu}><a href="#Afterparty">Afterparty</a>
                                        <li onClick={this.handleMobileMenu}><Link to = "/Accommodations">Accommodations</Link></li>
                                        <li onClick={this.handleMobileMenu}><Link to = "/Registry">Registry</Link></li>
                                        <li onClick={this.handleMobileMenu}><Link to = "/RSVP">RSVP</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header