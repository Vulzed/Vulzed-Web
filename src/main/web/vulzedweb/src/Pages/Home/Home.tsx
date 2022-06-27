import {useState} from 'react'
import {Button, MantineProvider} from '@mantine/core';
import logo from '../../Assets/fox.png';
import './Home.scss'
import TextEntrance from "../../Animations/TextEntrance";

function Home() {
    const [count, setCount] = useState(0)


    return (
        <MantineProvider withCSSVariables withGlobalStyles withNormalizeCSS>


            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <TextEntrance/>
                    <p>
                        <Button type="button" style={{backgroundColor: '#141517'}}
                                onClick={() => setCount((count) => count + 1)}>
                            count is: {count}
                        </Button>
                    </p>

                </header>
            </div>
        </MantineProvider>
    )
}

export default Home
