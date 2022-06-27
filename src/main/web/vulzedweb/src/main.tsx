import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.scss';
import RoutesPage from "./Routes";

function Main(){
    return (
        <div className="Main">
            <header className="Main-header">
                <BrowserRouter>
                    <RoutesPage/>
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
