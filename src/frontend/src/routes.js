import DashboardLayout from "layouts/Dashboard";
import LogoOnlyLayout from "layouts/LogoOnlyLayout";
import Home from "pages/Home";
import Login from "pages/Auth/login";
import NotFound from "pages/Page404";
import { Navigate, useLocation, useRoutes } from "react-router-dom";
import Register from "pages/Auth/register";

export default function Router() {
    let location = useLocation();
    return useRoutes([
        {
            path: '/dashboard',
            element: <DashboardLayout />,
            children: [
                { index: true, element: <Home /> },
                // { path: 'user', element: <User /> },
                // { path: 'products', element: <Products /> },
                // { path: 'blog', element: <Blog /> }
            ]
        },
        {
            path: '/',
            element: <LogoOnlyLayout />,
            children: [
                { path: 'login', element: <Login /> },
                { path: 'register', element: <Register /> },
                { path: '404', element: <NotFound /> },
                { path: '*', element: <Navigate to="/404" state={{ from: location }} replace /> }
            ]
        }
    ]);
}