import React from "react";
import { authRoles } from "../../auth";

export const TaskConfig = {
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
            path: '/task/:ID',
            component: React.lazy(() => import('./TaskApp')),
        }
    ]
};