import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <div className="page-footer-section bg-red fg-dark">
                <div className="container">
                    <div className="row mb-5 py-3">
                        <div className="col-sm-6 col-lg-2 py-3">
                            <h5 className="mb-3">Pages</h5>
                            <ul className="menu-link">
                                <li><Link to="/" className="">About Me</Link></li>
                                <li><Link to="/work" className="">My Work</Link></li>
                                <li><Link to="/contact" className="">Contact Me</></li>
                                <li><Link to="/cv" className="">Download CV</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-4 py-3">
                            <h5 className="mb-3">Contact</h5>
                            <ul className="menu-link">
                                <li><a href="/contact" className="">Contact Me</a></li>
                                <li>kaushikpatel26@yahoo.com</li>
                                <li>0433-555-279</li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-4 py-3">

                            <div className="mt-3">
                                <a href="https://github.com/kashpateltech" className="btn btn-fab btn-dark fg-white"><span className="mai-logo-github"></span></a>
                                <a href="https://www.linkedin.com/in/kashpateltech" className="btn btn-fab btn-dark fg-white"><span className="mai-logo-linkedin"></span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        </>
    )
}

export default Footer;