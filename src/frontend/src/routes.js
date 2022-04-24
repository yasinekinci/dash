import DashboardLayout from "layouts/Dashboard";
import LogoOnlyLayout from "layouts/LogoOnlyLayout";
import DashboardApp from "pages/DashboardApp";
import { Navigate, useRoutes } from "react-router-dom";

export default function Router() {
    return useRoutes([
        {
            path: '/dashboard',
            element: <DashboardLayout />,
            children: [
                { path: 'app', element: <DashboardApp /> },
                // { path: 'user', element: <User /> },
                // { path: 'products', element: <Products /> },
                // { path: 'blog', element: <Blog /> }
            ]
        },
        {
            path: '/',
            element: <LogoOnlyLayout />,
            children: [
                { path: '/', element: <Navigate to="/dashboard/app" /> },
                // { path: 'login', element: <Login /> },
                // { path: 'register', element: <Register /> },
                // { path: '404', element: <NotFound /> },
                // { path: '*', element: <Navigate to="/404" /> }
            ]
        },
        { path: '*', element: <Navigate to="/404" replace /> }
    ])
}