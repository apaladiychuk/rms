import React from "react";
import {authRoles} from "../../../../auth";

export const RoleConfig = {
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
             path: '/role/:ID',
             component: React.lazy(() => import('./item/DictIemApp')),
        },
        {
            path: '/roles',
            component: React.lazy(() => import('./RoleApp')),
        }
    ]
};