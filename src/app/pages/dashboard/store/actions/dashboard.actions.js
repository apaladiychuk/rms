import axios from 'axios';

export const GET_MAIN_STATE = '[DASHBOARD APP] GET MAIN STATE';
export const GET_ACTIVE_TASKS = '[DASHBOARD APP] GET ACTIVE TASKS';
export const GET_ORDERS_IN_PROC = '[DASHBOARD APP] GET ORDERS IN PROC';

export function getMainState() {

    const request = axios.get('/sql/main_stats');

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type: GET_MAIN_STATE,
                payload: response.data.data.main_stats[0],
            })
        );
}

export function getActiveTasks() {

    const request = axios.get('/sql/tasks_by_type');

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type: GET_ACTIVE_TASKS,
                payload: response.data.data.tasks_by_type[0],
            })
        );
}

export function getOrdersInProc() {

    const request = axios.get('/sql/orders_in_proc');

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type: GET_ORDERS_IN_PROC,
                payload: response.data.data.orders_in_proc,
            })
        );
}