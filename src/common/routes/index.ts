import AuthPage from "@pages/Auth";
import HomePage from "@pages/Home";
import IntegratePage from "@pages/Home/Integrate";
import UploadPage from "@pages/Home/Upload";
import VerificationsPage from "@pages/Home/Verifications";
import LandingPage from "@pages/Landing";

export type RoutePath =
    | '/'
    | '/app'
    | '/auth'
    | '/integrate'
    | '/upload'
    | '/verifications';

// Define route config interface
interface RouteConfig {
    PATH: RoutePath;
    ELEMENT: React.ComponentType;
    REQUIRES_AUTH?: boolean;
    IS_AUTH_PAGE?: boolean;
}

// Define routes object
interface Routes {
    AUTH_PAGE: RouteConfig;
    INTEGRATE_PAGE: RouteConfig;
    LANDING_PAGE: RouteConfig;
    UPLOAD_PAGE: RouteConfig;
    USER_HOMEPAGE: RouteConfig;
    VERIFICATIONS_PAGE: RouteConfig;
}

export const ROUTES: Routes = {
    AUTH_PAGE: {
        PATH: '/auth',
        ELEMENT: AuthPage,
        REQUIRES_AUTH: false,
        IS_AUTH_PAGE: true
    },
    INTEGRATE_PAGE: {
        PATH: '/integrate',
        ELEMENT: IntegratePage,
        REQUIRES_AUTH: true
    },
    LANDING_PAGE: {
        PATH: '/',
        ELEMENT: LandingPage,
        REQUIRES_AUTH: false
    },
    UPLOAD_PAGE: {
        PATH: '/upload',
        ELEMENT: UploadPage,
        REQUIRES_AUTH: true
    },
    USER_HOMEPAGE: {
        PATH: '/app',
        ELEMENT: HomePage,
        REQUIRES_AUTH: true
    },
    VERIFICATIONS_PAGE: {
        PATH: '/verifications',
        ELEMENT: VerificationsPage,
        REQUIRES_AUTH: true
    }
};
