import React, { createContext } from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    let location = useLocation();
    const { user } = useSelector(state => state.auth);

    const pageName = getRedirectPage(user, location.pathname);
    if (pageName) {
        return <Navigate to={pageName} state={{ from: location }} replace />;
    }

    return (<AuthContext.Provider>{children}</AuthContext.Provider>);
}

const getRedirectPage = (user, pathName) => {
    if (user && !pathName.startsWith('/dashboard') && pathName !== "/404") {
        return "/dashboard";
    } else if (!user && (pathName.startsWith('/dashboard') || pathName === '/')) {
        return "/login";
    } else {
        return;
    }
}

export default AuthProvider