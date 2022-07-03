import React, { useContext } from 'react';
import { Routes, Route } from "react-router-dom";
import { AuthContext } from '../context';
import { publicRoutes, privateRoutes } from '../router';
import Loader from './UI/Loader/Loader';

const AppRouter = () => {

    const {isAuth, isLoading} = useContext(AuthContext);

    if(isLoading) {
       return <Loader/>;
    }

    return (
        isAuth
             ?
            <Routes>
                {privateRoutes.map(route => 
                    <Route key={route.path} path={route.path} element={route.element}></Route>
                )}
            </Routes>   
            :
            <Routes>
                {publicRoutes.map(route => 
                    <Route key={route.path} path={route.path} element={route.element}></Route>
                )}
            </Routes>
    )
};

export default AppRouter;
