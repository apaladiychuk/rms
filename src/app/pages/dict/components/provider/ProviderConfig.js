import React from "react";
import {authRoles} from "../../../../auth";

export const ProviderConfig = {
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
            path: '/provider/:ID',
            component: React.lazy(() => import('./item/DictIemApp')),
        },
        {
            path: '/providers',
            component: React.lazy(() => import('./ProviderApp')),
        }
    ]
};