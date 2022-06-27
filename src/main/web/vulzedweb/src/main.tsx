import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from './Pages/Layout';
import NoPage from "./Pages/NoPage";
import Login from "./Pages/Login";
import './index.scss';
import Home from "./Pages/Home";

function Main(){
    return (
        <div className="Main">
            <header className="Main-header">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout/>}>
                            <Route index element={<Home/>}/>
                            <Route path="login" element={<Login/>}/>
                            <Route path="*" element={<NoPage/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </header>
        </div>
    );
}

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Main/>
    </React.StrictMode>
);
