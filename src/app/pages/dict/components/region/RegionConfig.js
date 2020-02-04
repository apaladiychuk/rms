import React from "react";
import {authRoles} from "../../../../auth";

export const RegionConfig = {
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
             path: '/region/:ID',
             component: React.lazy(() => import('./item/DictIemApp')),
        },
        {
            path: '/regions',
            component: React.lazy(() => import('./RegionApp')),
        }
    ]
};