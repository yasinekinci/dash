import DashboardLayout from "layouts/Dashboard";
import LogoOnlyLayout from "layouts/LogoOnlyLayout";
import Home from "pages/Home";
import Login from "pages/Auth/login";
import NotFound from "pages/Page404";
import { Navigate, useRoutes } from "react-router-dom";
import Register from "pages/Auth/register";

export default function Router() {
    return useRoutes([
        {
            path: '/dashboard',
            element: <DashboardLayout />,
            children: [
                { path: '', element: <Home /> },
                // { path: 'user', element: <User /> },
                // { path: 'products', element: <Products /> },
                // { path: 'blog', element: <Blog /> }
            ]
        },
        {
            path: '/',
            element: <LogoOnlyLayout />,
            children: [
                { path: '/', element: <Navigate to="/dashboard" /> },
                { path: 'login', element: <Login /> },
                { path: 'register', element: <Register /> },
                { path: '404', element: <NotFound /> },
                { path: '*', element: <Navigate to="/404" /> }
            ]
        },
        { path: '*', element: <Navigate to="/404" replace /> }
    ])
}