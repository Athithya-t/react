import React from 'react';
import { Route, Routes, Navigate, HashRouter } from "react-router-dom";

const routes = () => {
    return(
        <HashRouter>
        <Routes>
            <Route path='/' element={<Navigate to='/home'/>} />
            <Route path='/aboutUs '/>

        </Routes>
        </HashRouter>
    );
};

export default routes;