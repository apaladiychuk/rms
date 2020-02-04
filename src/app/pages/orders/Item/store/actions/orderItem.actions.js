import axios from 'axios';
import history from '../../../../../../@history'
import * as GeneralActions from "../../../../../store/actions";

export const GET_ORDER = '[ORDER ITEM APP] GET ORDER';
export const GET_PROVIDERS = '[ORDER ITEM APP] GET PROVIDERS';
export const CREATE_PROVIDER = '[ORDER ITEM APP] CREATE PROVIDER';
export const DELETE_PROVIDER = '[ORDER ITEM APP] DELETE PROVIDER';
export const CLEAR = '[ORDER ITEM APP] CLEAR';

export function createOrder() {

    const request = axios.get('/orders?order_id=new');

    return () =>
        request.then((response) => {
            history.push(`/order/${response.data.orderId}`)
        });
}

export function getOrder(id) {

    const request = axios.get(`/orders?order_id=${id}`);

    return (dispatch) =>
        request.then((response) => {
            dispatch({
                type: GET_ORDER,
                payload: response.data
            });
        });
}

export function getProvidersList() {

    const request = axios.get('/dict/providers');

    return (dispatch) =>
        request.then((response) => {
            dispatch({
                type: GET_PROVIDERS,
                payload: response.data.providers
            });
        });
}

export function createProvider(provider_id) {

    return (dispatch, getState) => {
        const order_id = getState().ordersItemApp.orderItem.data.id;
        dispatch({
            type: CREATE_PROVIDER,
            payload: {
                provider_id,
                order_id: order_id
            }
        })
    }
}

export function deleteProvider() {

    return (dispatch) => {
        dispatch({
            type: DELETE_PROVIDER,
        })
    }
}

export function clear() {

    return (dispatch) => {
        dispatch({
            type: CLEAR,
        })
    }
}

export function changeStatus(status) {

    return (dispatch, getData) => {
        const { id } = getData().ordersItemApp.orderItem.data;

        axios.post('/action/order_status', {
            order_id: id,
            status: status,
        })
            .then(() => {
                dispatch(GeneralActions.showMessage({
                    message: 'Order status changed',
                    variant: 'success'
                }));

                dispatch(getOrder(id));
            })
            .catch(() => {
                dispatch(GeneralActions.showMessage({
                    message: 'Error',
                    variant: 'error'
                }));
            })
    }
}