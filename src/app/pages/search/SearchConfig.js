import SearchApp from './SearchApp';
import React from "react";
import {authRoles} from "../../auth";

export const SearchConfig = {
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
            path: '/search',
            component: React.lazy(() => import('./SearchApp')),
        }
    ]
};