import React, { Component } from 'react'
import './Header.css'

export class Header extends Component {
    constructor(props) {
        super (props)
        this.handleKeyPress = this.handleKeyPress.bind(this)
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
                            <a href = "/" data-shrink-original-size = "30">Oleg & Makayla</a>
                        </h1>
                    </div>
                    <div id = "header-nav">
                        <div id = "header-nav-wrapper">
                            <div className = "nav-left">
                                <nav className = "nav-bar">
                                    <div className = "nav-item">
                                        <a href = "/">Ceremony</a>
                                    </div>
                                    <div className = "nav-item">
                                        <a href = "/">Reception</a>
                                    </div>
                                    <div className = "nav-item">
                                        <a href = "/">Afterparty</a>
                                    </div>
                                </nav>
                            </div>
                            <div className = "nav-right">
                                <nav className = "nav-bar">
                                    <div className = "nav-item">
                                        <a href = "/">Accommodations</a>
                                    </div>
                                    <div className = "nav-item">
                                        <a href = "/">Registry</a>
                                    </div>
                                    <div className = "nav-item">
                                        <a href = "/">RSVP</a>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "header-mobile">
                    <div id = "site-title-wrapper" data-content-field = "site-title">
                        <h1 id = "site-title">
                            <a href = "/" data-shrink-original-size = "30">Oleg & Makayla</a>
                        </h1>
                    </div>

                    <div class="menu-wrap">
                        <input type="checkbox" class="toggler"/>
                        <div class="hamburger">
                            <div></div>
                        </div>
                        <div class="menu">
                            <div>
                                <div>
                                    <ul>
                                        <li><a href = "/">Ceremony</a></li>
                                        <li><a href = "/">Reception</a></li>
                                        <li><a href = "/">Afterparty</a></li>
                                        <li><a href = "/">Accommodations</a></li>
                                        <li><a href = "/">Registry</a></li>
                                        <li><a href = "/">RSVP</a></li>
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