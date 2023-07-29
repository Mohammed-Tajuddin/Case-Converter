import React from 'react'
import { Outlet, Link } from "react-router-dom";

export default function Navbar(props) {
    let font = props.mode==="dark"?"light":"dark";
    return (
        <nav className={`navbar navbar-expand-lg bg-${props.mode} text-${font}`}>
            <div className="container-fluid">
                <Link className={`navbar-brand fw-bold mx-5 text-${font}`} to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item active">
                            <Link className={`nav-link active text-${font}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link text-${font}`} aria-current="page" to="/About">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link text-${font}`} to="/Contact">Contact Us</Link>
                        </li>
                    </ul>
                        <div className="form-check form-switch mx-5">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Dark Mode</label>
                        </div>

                </div>
                <Outlet/>
            </div>
        </nav>
    )
}

Navbar.defaultProps = {
    title: "Title"
};