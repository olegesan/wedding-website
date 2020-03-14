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
            </header>
        )
    }
}

export default Header