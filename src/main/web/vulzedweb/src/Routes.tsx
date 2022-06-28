import React, {Suspense} from "react";
import {Routes, Route} from "react-router-dom";
import Layout from "./Layout";

const Home = React.lazy(() => import('./Pages/Home/Home'));
const Portal = React.lazy(() => import('./Pages/Login/Portal'));
const Download = React.lazy(() => import('./Pages/Download/Download'));
import Loading from "./Pages/Loading/Loading";
import NoPage from "./Pages/NoPage/NoPage";

export default function RoutesPage() {

    return (
        <Suspense fallback={<Loading/>}>

            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="portal" element={<Portal/>}/>
                    <Route path="download" element={<Download/>}/>q
                    <Route path="*" element={<NoPage/>}/>
                </Route>
            </Routes>
        </Suspense>
    );
}

