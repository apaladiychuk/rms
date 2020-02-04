import React from "react";
import {authRoles} from "../../../../auth";

export const DiscountConfig = {
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
             path: '/discount/:ID',
             component: React.lazy(() => import('./item/DictIemApp')),
        },
        {
            path: '/discounts',
            component: React.lazy(() => import('./DiscountApp')),
        }
    ]
};