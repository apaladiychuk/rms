import axios from 'axios';

export const GET_ORDERS_LIST = '[ORDERS APP] GET ORDERS LIST';

export function getOrdersList() {

    const request = axios.get('/orders');

    return (dispatch) =>
        request.then((response) => {

            dispatch({
                type: GET_ORDERS_LIST,
                payload: response.data,
            })
        });
}