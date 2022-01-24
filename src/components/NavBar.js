import React from 'react';
import { Link } from "react-router-dom";

function NavBar() {
    return (
    <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" sticky="top">
                <div className="container">
                    <a className="navbar-brand" href="/">Kaushik Patel</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarToggler">
                        <ul className="navbar-nav ml-lg-5 mt-3 mt-lg-0">
            
                            <li className="nav-item">
                                <Link className="nav-link" to="/">About Me</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/work">My Work</Link>
                            </li>
                        </ul>
                        <div className="ml-auto my-2 my-lg-0">
                            <a className="btn btn-dark rounded-pill nav-link" href="/cv">Download CV</a>
                        </div>
                    </div>
                </div>
            </nav>
    </>
    )
}

export default NavBar;