import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../Components/Navbar";

const Layout = () => {
    return (
        <div className="Layout">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>

    );
}
export default Layout;
