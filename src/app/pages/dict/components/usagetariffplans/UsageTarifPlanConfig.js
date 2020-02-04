import React from "react";
import {authRoles} from "../../../../auth";

export const UsageTarifPlanConfig = {
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
             path: '/usage_tariff_plan/:ID',
             component: React.lazy(() => import('./item/DictIemApp')),
        },
        {
            path: '/usage_tariff_plans',
            component: React.lazy(() => import('./UsageTarifPlanApp')),
        }
    ]
};