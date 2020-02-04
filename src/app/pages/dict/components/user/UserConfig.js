import React from "react";
import {authRoles} from "../../../../auth";

export const UserConfig = {
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
             path: '/user/:ID',
             component: React.lazy(() => import('./item/DictIemApp')),
        },
        {
            path: '/users',
            component: React.lazy(() => import('./UserApp')),
        }
    ]
};