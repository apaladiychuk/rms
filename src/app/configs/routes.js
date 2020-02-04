import React from 'react';
import {Redirect} from 'react-router-dom';
import Utils from '../../@theme/utils';
import authRoles from "../auth/authRoles";

// Pages Config
import {ErrorsConfig} from '../pages/errors/ErrorsConfig';
import {LoginPageConfig} from '../pages/login/LoginPageConfig';
import {SearchConfig} from '../pages/search/SearchConfig';
import {JobsConfig} from '../pages/jobs/JobsConfig';
import {OrdersConfig} from '../pages/orders/OrdersConfig';
import {DashboardConfig} from '../pages/dashboard/DashboardConfig';
import {ProviderConfig} from "../pages/dict/components/provider/ProviderConfig";
import {RegionConfig} from "../pages/dict/components/region/RegionConfig";
import {TaskConfig} from "../pages/task/TaskConfig";
import {NumberCatConfig} from "../pages/dict/components/number_cat/NumberCatConfig";
import {ClientConfig} from "../pages/dict/components/client/ClientConfig";
import {UsageTarifPlanConfig} from "../pages/dict/components/usagetariffplans/UsageTarifPlanConfig";
import {DiscountConfig} from "../pages/dict/components/discount/DiscountConfig";
import {TariffConfig} from "../pages/dict/components/tariff/TariffConfig";
import {AuditConfig} from "../pages/audit/AuditConfig";
import {RoleConfig} from "../pages/dict/components/role/RoleConfig";
import {UserConfig} from "../pages/dict/components/user/UserConfig";
import {ReserveConfig} from "../pages/dict/components/reserve/ReserveConfig";

const routeConfigs = [
    LoginPageConfig,
    SearchConfig,
    JobsConfig,
    OrdersConfig,
    ErrorsConfig,
    DashboardConfig,
    ProviderConfig,
    RegionConfig,
    TaskConfig,
    NumberCatConfig,
    ClientConfig,
    UsageTarifPlanConfig,
    DiscountConfig,
    TariffConfig,
    AuditConfig,
    UserConfig,
    RoleConfig,
    ReserveConfig
];

const routes = [
    ...Utils.generateRoutesFromConfigs(routeConfigs),
    {
        auth: authRoles.user,
        component: () => <Redirect to="/404"/>
    },
    {
        auth: authRoles.onlyGuest,
        component: () => <Redirect to="/login"/>
    }
];

export default routes;