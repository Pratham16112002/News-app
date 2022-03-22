import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from "react-router-dom"
import SearchBar from './searchBar'



const NavBar = (props) => {

    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">News-Hub</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="btn btn-dark nav-Link mx-2" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="btn btn-dark nav-Link mx-2" to="/business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="btn btn-dark nav-Link mx-2" to="/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="btn btn-dark nav-Link mx-2" to="/health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="btn btn-dark nav-Link mx-2" to="/science">science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="btn btn-dark nav-Link mx-2" to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="btn btn-dark nav-Link mx-2" to="/technology">Technology</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar