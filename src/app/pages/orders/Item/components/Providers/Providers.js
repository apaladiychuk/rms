import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import * as Actions from "../../store/actions";
import ProviderAdd from "./ProviderAdd";
import ProviderNew from "./ProviderNew";
import Provider from "./Provider";

function Providers() {

    const dispatch = useDispatch();

    const data = useSelector(({ordersItemApp}) => ordersItemApp.orderItem);

    useEffect(() => {
        dispatch(Actions.getProvidersList());
    }, [dispatch]);

    return (
        <>
            <ProviderAdd providers={data.providers}/>

            {/*For new provider */}
            <ProviderNew
                providers={data.providers}
                newProvider={data.newProvider}
                order_id={data.data.id}
            />

            {/* For providers list */}
            {
                Boolean(Object.keys(data.model).length) && Object.keys(data.model).map((id) => (
                    <Provider
                        item={{
                            ...data.model[id],
                            provider_id: id
                        }}
                        key={id}
                    />
                ))
            }
        </>
    );
}

export default Providers;