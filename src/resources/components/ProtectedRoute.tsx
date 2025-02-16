import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { usePrivy } from '@privy-io/react-auth';
import LoadingPage from './LoadingPage';
import { ROUTES } from '@common/routes';

interface ProtectedRouteProps {
    element: React.ComponentType;
    requiresAuth?: boolean;
    authPage?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
    element: Element,
    requiresAuth,
    authPage,
    ...rest
}) => {

    const { ready, authenticated } = usePrivy();

    useEffect(() => {
        document.title = `SITE NAME ${window.location.pathname ? ' ~ ' + window.location.pathname.replace('/', '') : ''}`.toUpperCase();
    }, []);


    if (!ready) {
        return <LoadingPage />
    }

    // if ((isModalOpen || (requiresAuth && !user)) && authenticated) {
    //     console.log("NO USER/")
    //     return <LoadingPage />
    // }

    // Redirect authenticated users trying to access an auth page
    if (authPage && authenticated) {
        return <Navigate to={ROUTES['USER_HOMEPAGE']['PATH']} replace />;
    }

    if (requiresAuth && !authenticated) {
        return <Navigate to={ROUTES['AUTH_PAGE']['PATH']} replace />;
    }

    return <Element {...rest} />;
};

export default ProtectedRoute;
