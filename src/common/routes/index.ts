import AuthPage from "@pages/Auth";
import HomePage from "@pages/Home";

export type RoutePath =
    | '/'
    | '/app'
    | '/auth'
// | OTHER ROUTES GOES HERE

interface RouteConfig {
    PATH: RoutePath;
    ELEMENT: React.ComponentType;
    REQUIRES_AUTH?: boolean;
    IS_AUTH_PAGE?: boolean;
    // SANTA ADD MORE CHECKS HERE SIRE
}

// Define keys for each route to ensure type safety
interface Routes {
    LANDING: RouteConfig;
    AUTH_PAGE: RouteConfig;
    USER_HOMEPAGE: RouteConfig;
    // BOSS MORE ROUTES HERE MY CHIEF
}

export const ROUTES: Routes = {
    USER_HOMEPAGE: {
        PATH: '/app',
        ELEMENT: HomePage,
        REQUIRES_AUTH: true
    },
    AUTH_PAGE: {
        PATH: '/auth',
        ELEMENT: AuthPage,
        REQUIRES_AUTH: false,
        IS_AUTH_PAGE: true
    },
    LANDING: {
        PATH: '/',
        ELEMENT: HomePage,
        REQUIRES_AUTH: true
    }
}