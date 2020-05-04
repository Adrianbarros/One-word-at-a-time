import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">One Word</Link>
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/word-list" className="nav-link">Your words</Link>
                        </li>
                    </ul>

                </div>
            </nav>
        );
    }
}

export default Navbar
