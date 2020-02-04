import React from "react";
import {authRoles} from "../../../../auth";

export const ClientConfig = {
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
             path: '/client/:ID',
             component: React.lazy(() => import('./item/DictIemApp')),
        },
        {
            path: '/clients',
            component: React.lazy(() => import('./ClientApp')),
        }
    ]
};