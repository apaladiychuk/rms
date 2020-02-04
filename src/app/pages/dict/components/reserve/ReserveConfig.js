import React from "react";
import {authRoles} from "../../../../auth";

export const ReserveConfig = {
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
             path: '/reserv/:ID',
             component: React.lazy(() => import('./item/DictIemApp')),
        },
        {
            path: '/reserv',
            component: React.lazy(() => import('./ReserveApp')),
        }
    ]
};