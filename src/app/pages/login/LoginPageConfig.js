import React from "react";
import { authRoles } from "../../auth";

export const LoginPageConfig = {
    auth: authRoles.onlyGuest,
    routes: [
        {
            path: '/login',
            component: React.lazy(() => import('./LoginPage'))
        }
    ]
};
