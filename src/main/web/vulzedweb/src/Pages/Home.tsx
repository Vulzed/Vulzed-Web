import {useState} from 'react'
import {Button, MantineProvider} from '@mantine/core';
import logo from '../logo.svg'
import '../Styles/Home.scss'

function Home() {
    const [count, setCount] = useState(0)


    return (
        <MantineProvider theme={{
            colorScheme: 'dark',
            fontFamily: 'Open Sans, sans serif',
            spacing: {xs: 15, sm: 20, md: 25, lg: 30, xl: 40},
        }}>


            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>Hello Vite + React!</p>
                    <p>
                        <Button type="button" style={{backgroundColor: '#141517'}}
                                onClick={() => setCount((count) => count + 1)}>
                            count is: {count}
                        </Button>
                    </p>
                    <p>
                        Edit <code>Main.tsx</code> and save to test HMR updates.
                    </p>
                    <p>
                        <a
                            className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn React
                        </a>
                        {' | '}
                        <a
                            className="App-link"
                            href="https://vitejs.dev/guide/features.html"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Vite Docs
                        </a>
                    </p>
                </header>
            </div>
        </MantineProvider>
    )
}

export default Home
