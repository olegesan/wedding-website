import React, { Component } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

export class Header extends Component {
    constructor(props) {
        super (props)
        this.handleKeyPress = this.handleKeyPress.bind(this)
        this.toggler = React.createRef()
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
                                        <Link to = "/Ceremony">Ceremony</Link>
                                    </div>
                                    <div className = "nav-item">
                                        <Link to = "/Reception">Reception</Link>
                                    </div>
                                    <div className = "nav-item">
                                        <Link to = "/Afterparty">Afterparty</Link>
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
                        <h1 id = "site-title">
                            <Link to = "/" data-shrink-original-size = "30">Oleg & Makayla</Link>
                        </h1>
                    </div>

                    <div class="menu-wrap">
                        <input type = "checkbox" className = "toggler" ref = {this.toggler}/>
                        <div class="hamburger">
                            <div></div>
                        </div>
                        <div class="menu">
                            <div>
                                <div>
                                    <ul>
                                        <li><Link to = "/Ceremony">Ceremony</Link></li>
                                        <li><Link to = "/Reception">Reception</Link></li>
                                        <li><Link to = "/Afterparty">Afterparty</Link></li>
                                        <li><Link to = "/Accommodations">Accommodations</Link></li>
                                        <li><Link to = "/Registry">Registry</Link></li>
                                        <li><Link to = "/RSVP">RSVP</Link></li>
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