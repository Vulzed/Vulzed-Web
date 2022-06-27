import {Button, Container} from "@mantine/core";
import React from "react";
import {Link} from "react-router-dom";
import '../Styles/Navbar.scss';

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
                            <li>
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
                <a href="#">Welcome</a>
            </div>
        </header>


    );
}

export default Navbar;
