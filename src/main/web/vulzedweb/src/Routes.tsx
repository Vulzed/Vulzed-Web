import React, {Suspense} from "react";
import {Routes, Route} from "react-router-dom";
import Layout from "./Layout";
const Home = React.lazy(() => import('./Pages/Home/Home'));
const Login = React.lazy(() => import('./Pages/Login/Login'));
import Loading from "./Pages/Loading/Loading";
import NoPage from "./Pages/NoPage/NoPage";

export default function RoutesPage() {

        return (
            <Suspense fallback={<Loading />}>

            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="*" element={<NoPage/>}/>
                </Route>
            </Routes>
            </Suspense>
        );
    }

