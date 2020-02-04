import React, { useEffect } from 'react';
import PageLayout from "../../../components/pageLayout/PageLayout";
import {useDispatch, useSelector} from 'react-redux';
import * as Actions from './store/actions';
import reducer from './store/reducers';
import withReducer from "../../../store/withReducer";
import ItemHeader from "./components/ItemHeader";
import ItemContent from "./components/ItemContent";
import get from 'lodash/get'

import '../styles/orders.scss';

function OrdersApp(props) {
    const dispatch = useDispatch();

    const data = useSelector(({ ordersItemApp }) => ordersItemApp.orderItem.data);

    useEffect(() => {
        if (props.match.params.ID === 'new') {
            dispatch(Actions.createOrder());
        } else {
            dispatch(Actions.getOrder(props.match.params.ID));
        }
    }, [dispatch, props.match.params.ID]);

    return (
        <PageLayout
            header={
                <ItemHeader
                    id={get(data, 'id')}
                    status={get(data, 'status')}
                />
            }
            content={<ItemContent />}
            userContent
            load={!data}
        />
    );
}

export default withReducer('ordersItemApp', reducer)(OrdersApp);