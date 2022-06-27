import {Button, Container} from "@mantine/core";
import React from "react";
import {Link, useNavigate} from "react-router-dom";
import './Navbar.scss';

function Navbar() {


    return (
        <header className="Navbar-header">

            <div className="Left">
                <p>Vulzed</p>
            </div>
            <nav className="Mid">
                <ul className="Navbar">
                    <Container>
                        <Button>
                            <li className="Home">
                                <Link to="/">Home</Link>
                            </li>
                        </Button>
                    </Container>
                    <Container>
                        <Button>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                        </Button>
                    </Container>
                </ul>
            </nav>
            <div className="right">
                <a href="src/Components/Navbar/Navbar#">Welcome</a>
            </div>
        </header>


    );
}

export default Navbar;
