import React from "react";
import authRoles from "../../auth/authRoles";

export const DashboardConfig = {
    auth: authRoles.user,
    settings: {
        navbar: {
            display: true
        },
        toolbar: {
            display: true
        },
    },
    routes: [
        {
            path: '/',
            exact: true,
            component: React.lazy(() => import('./DashboardApp')),
        }
    ]
};