
import {MantineProvider} from '@mantine/core';
import logo from '../../Assets/fox.png';
import './Home.scss'
import TextEntrance from "../../Animations/TextEntrance";

function Home() {


    return (
        <MantineProvider withCSSVariables withGlobalStyles withNormalizeCSS>


            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <TextEntrance/>
                    <p>
                    </p>

                </header>
            </div>
        </MantineProvider>
    )
}

export default Home
