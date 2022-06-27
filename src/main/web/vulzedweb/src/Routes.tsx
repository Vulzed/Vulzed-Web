import React, { Component } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import NoPage from "./Pages/NoPage/NoPage";

export default function RoutesPage() {

        return (
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="*" element={<NoPage/>}/>
                </Route>
            </Routes>
        );
    }

