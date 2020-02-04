import React from "react";
import { authRoles } from "../../auth";

export const JobsConfig = {
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
            path: '/jobs',
            component: React.lazy(() => import('./JobsApp')),
        }
    ]
};