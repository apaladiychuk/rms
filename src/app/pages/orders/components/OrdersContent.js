import React from 'react';
import {useSelector} from 'react-redux';
import { Typography } from "@material-ui/core";
import OrdersTable from "./ordersTable/OrdersTable";

function OrdersContent() {
    const list = useSelector(({ordersApp}) => ordersApp.orders.list);

    return (
        <div className="order__content">
            {
                Boolean(list.length) && (
                    <OrdersTable
                        list={list}
                    />
                )
            }
        </div>
    );
}

export default OrdersContent;