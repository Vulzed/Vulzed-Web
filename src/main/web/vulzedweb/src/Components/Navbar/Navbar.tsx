import {Button, Space} from "@mantine/core";
import React from "react";
import {Link} from "react-router-dom";
import './Navbar.scss';
import Logo from '../../Assets/fox.png';

function Navbar() {
    return (
        <header className="Navbar-header">
            <div className="Left">
                    <Link to="/"><img src={Logo} width={40}/></Link>
            </div>

            <nav className="Mid">
                <ul className="Navbar">
                    <Link to="/"><Button>Home</Button></Link>
                    <Link to="/download"><Button>Download</Button></Link>
                    <Link to="/login"><Button>Login</Button></Link>
                    <Space w={40}/>
                </ul>
            </nav>

        </header>


    );
}

export default Navbar;
