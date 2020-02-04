import React from "react";
import {authRoles} from "../../../../auth";

export const NumberCatConfig = {
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
             path: '/number_category/:ID',
             component: React.lazy(() => import('./item/DictIemApp')),
        },
        {
            path: '/number_categories',
            component: React.lazy(() => import('./NumberCatApp')),
        }
    ]
};