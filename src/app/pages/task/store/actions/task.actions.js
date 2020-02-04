import axios from 'axios';

import {date_transform_api} from "../../../../../constans";
import history from '../../../../../@history';
import * as GeneralActions from "../../../../store/actions";
import * as OrderItemActions from "../../../orders/Item/store/actions";

export const UPDATE_TASK_FORM = '[TASK APP] UPDATE TASK FORM';
export const GET_CLIENT = '[TASK APP] GET CLIENT';
export const GET_TARIFFS = '[TASK APP] GET TARIFFS';
export const GET_NUMBERS = '[TASK APP] GET NUMBERS';
export const GET_PROVIDERS = '[TASK APP] GET PROVIDERS';
export const CONTROL_TASK_TYPE = '[TASK APP] CONTROL TYPE';
export const CONTROL_TASK_LOCSTATE = '[TASK APP] CONTROL LOCSTATE';
export const CLEAR = '[TASK APP] TASK CLEAR';

export function updateTaskForm(data) {

    return (dispatch) =>
        dispatch({
            type: UPDATE_TASK_FORM,
            payload: data,
        })
}

export function getClients() {

    const request = axios.get('/sql/clients');

    return (dispatch) =>
        request.then((response) => {

            dispatch({
                type: GET_CLIENT,
                payload: response.data.data.clients,
            })
        });
}

export function getTariffs() {

    const request = axios.get('/sql/tariffs');

    return (dispatch) =>
        request.then((response) => {

            dispatch({
                type: GET_TARIFFS,
                payload: response.data.data.tariffs,
            })
        });
}

export function controlTaskType(type) {

    return (dispatch) =>
        dispatch({
            type: CONTROL_TASK_TYPE,
            payload: type,
        })
}

export function controlTaskLocState(state) {

    return (dispatch) =>
        dispatch({
            type: CONTROL_TASK_LOCSTATE,
            payload: state,
        })
}

export function createTask() {

    return (dispatch, getState) => {
        const form = getState().taskApp.task.form;
        const locState = getState().taskApp.task.info.locState;

        axios.post('/action/task_add', {
            ...form,
            order_id: locState.order_id,
            provider_id: locState.provider_id,
            type: locState.type,
            oper: locState.operation,
            date1: date_transform_api(form.date1),
            date2: date_transform_api(form.date2),
        })
            .then(() => {
                dispatch(GeneralActions.showMessage({
                    message: 'Task Created',
                    variant: 'success'
                }));
                dispatch(OrderItemActions.clear());
                history.push(`/order/${locState.order_id}`);
            })
            .catch(() => {
                dispatch(GeneralActions.showMessage({
                    message: 'Error',
                    variant: 'error'
                }));
            })
    }
}

export function disconnectTask() {

    return (dispatch, getState) => {
        const form = getState().taskApp.task.form;
        const locState = getState().taskApp.task.info.locState;

        axios.post('/task/disconnect', {
            ...form,
            order_id: locState.order_id,
            provider_id: locState.provider_id,
            date1: date_transform_api(form.date1),
        })
            .then(() => {
                dispatch(GeneralActions.showMessage({
                    message: 'Task Created',
                    variant: 'success'
                }));
                dispatch(OrderItemActions.clear());
                history.push(`/order/${locState.order_id}`);
            })
            .catch(() => {
                dispatch(GeneralActions.showMessage({
                    message: 'Error',
                    variant: 'error'
                }));
            })
    }
}

export function handoverTask() {

    return (dispatch, getState) => {
        const form = getState().taskApp.task.form;
        const locState = getState().taskApp.task.info.locState;

        axios.post('/task/handover', {
            ...form,
            order_id: locState.order_id,
            date1: date_transform_api(form.date1),
        })
            .then(() => {
                dispatch(GeneralActions.showMessage({
                    message: 'Task Created',
                    variant: 'success'
                }));
                dispatch(OrderItemActions.clear());
                history.push(`/order/${locState.order_id}`);
            })
            .catch(() => {
                dispatch(GeneralActions.showMessage({
                    message: 'Error',
                    variant: 'error'
                }));
            })
    }
}

export function getNumbers() {

    return (dispatch, getState) => {
        const { type, provider_id } = getState().taskApp.task.info.locState;

        axios.get(`/task/disconnect?type=${type}&provider_id=${provider_id}`)
            .then((response) => {

                dispatch({
                    type: GET_NUMBERS,
                    payload: response.data.tasks,
                })
            });
    }
}

export function getHandoverData() {

    return (dispatch, getState) => {
        const { type, provider_id, order_id } = getState().taskApp.task.info.locState;

        axios.get(`/task/handover?type=${type}&order_id=${order_id}&provider_id=${provider_id}`)
            .then((response) => {
                dispatch({
                    type: GET_NUMBERS,
                    payload: response.data.tasks,
                });
                dispatch({
                    type: GET_PROVIDERS,
                    payload: response.data.providerList,
                })
            });
    }
}

export function clear() {

    return (dispatch) => {
        dispatch({ type: CLEAR })
    }
}