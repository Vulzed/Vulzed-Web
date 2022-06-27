import {Button, Grid} from "@mantine/core";
import React from "react";
import {Link} from "react-router-dom";
import './Navbar.scss';

function Navbar() {


    return (
        <header className="Navbar-header">

            <div className="Left">
                <li>
                    <Link to="/"><Button></Button></Link>
                </li>
            </div>
            <nav className="Mid">
                <ul className="Navbar">
                    <Grid gutter={60}>
                        <Grid.Col span={4}>


                            <Link to="/"><Button>Home</Button></Link>


                        </Grid.Col>
                        <Grid.Col span={4}>


                            <Link to="/login"><Button>Login</Button></Link>


                        </Grid.Col>
                    </Grid>
                </ul>
            </nav>
        </header>


    );
}

export default Navbar;
