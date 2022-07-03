import { Navigate } from "react-router-dom";
import About from "../pages/About";
import Login from "../pages/login";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";

export const privateRoutes = [
    {path: '/about', element: <About/>},
    {path: '/posts', element: <Posts/>},
    {path: '/posts/:id', element: <PostIdPage/>},
    {path: '*', element: <Navigate replace to="/posts"/>}
];

export const publicRoutes = [
    {path: '/login', element: <Login/>},
    {path: '*', element: <Navigate replace to="/login"/>}
];