import React from 'react';
import {useSelector} from "react-redux";
import ResourceInfo from "./ResourceInfo";

function Resources({ provider, isNewProvider }) {

    const tasks = useSelector(({ ordersItemApp }) => ordersItemApp.orderItem.tasks);

    const taskFilter = (resource) => {
        if (isNewProvider) return [];

        return tasks.filter((item, i) => resourceTypes(resource).includes(i));
    };

    const resourceTypes = resource => provider.res_types[resource];

    return (
        <>
            <ResourceInfo
                name="Alpha"
                type="ALPHA"
                tasks={taskFilter('ALPHA')}
                provider={provider}
                isNewProvider={isNewProvider}
            />
            <ResourceInfo
                name="IVR"
                type="IVR"
                tasks={taskFilter('IVR')}
                provider={provider}
                isNewProvider={isNewProvider}
            />
            <ResourceInfo
                name="SMS"
                type="SMS"
                tasks={taskFilter('SMS')}
                provider={provider}
                isNewProvider={isNewProvider}
            />
            <ResourceInfo
                name="USSD"
                type="USSD"
                tasks={taskFilter('USSD')}
                provider={provider}
                isNewProvider={isNewProvider}
            />
            <ResourceInfo
                name="Billing ID"
                type="BID"
                tasks={taskFilter('BSID')}
                provider={provider}
                isNewProvider={isNewProvider}
            />
        </>
    );
}

export default Resources;