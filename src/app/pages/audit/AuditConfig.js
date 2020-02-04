import React from "react";
import {authRoles} from "../../auth";

export const AuditConfig = {
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
            path: '/audit',
            component: React.lazy(() => import('./AuditApp')),
        }
    ]
};