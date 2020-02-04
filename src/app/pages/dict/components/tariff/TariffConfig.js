import React from "react";
import {authRoles} from "../../../../auth";

export const TariffConfig = {
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
             path: '/tariff/:ID',
             component: React.lazy(() => import('./item/DictIemApp')),
        },
        {
            path: '/tariffs',
            component: React.lazy(() => import('./TariffApp')),
        }
    ]
};