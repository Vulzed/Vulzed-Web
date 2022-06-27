import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <header className="Navbar-header">
            <div className="Left">
                <p>Vulzed</p>
            </div>
            <nav className="Mid">
                <ul className="Navbar">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
            <div className="right">
                <a href="#">Welcome</a>
            </div>
        </header>


    );
}

export default Navbar;
