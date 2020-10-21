import React, { Component } from 'react'
// import {Link} from 'react-router-dom';

export default class Navbar extends Component {render() {
        return (
            <nav className="navbar">
                <div className="nav-center">

                    <ul>
                        <li>Home</li>
                        <li>About</li>
                    </ul>
                    <div className="nav-header">
                        
                        <button type="button" className="nav-btn">
                            Button Here
                        </button>
                    </div>
                </div>
            </nav>
        )
    }
}