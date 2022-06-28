
import {Button, MantineProvider} from '@mantine/core';
import logo from '../../Assets/fox.png';
import './Home.scss'
import {Link} from "react-router-dom";
import React from "react";

function Home() {


    return (
        <MantineProvider withCSSVariables withGlobalStyles withNormalizeCSS>


            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>

                    <div className="Paragraph">
                        <h1>  Talk privately with your friends and family.</h1>
                        <p>A new kind of way to chat privately without session-based messaging.</p>
                        <Link to="/download"><Button>Get Vulzed</Button></Link>
                    </div>

                </header>
            </div>

        </MantineProvider>
    )
}

export default Home
