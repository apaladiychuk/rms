import axios from 'axios';
import * as GeneralActions from "../../../../store/actions";

export const GET_JOBS_LIST = '[JOBS APP] GET JOBS LIST';
export const SET_JOB_ACTIVE = '[JOBS APP] SET JOB ACTIVE';
export const CLEAR = '[JOBS APP] CLEAR';

export function getJobsList() {
    const request = axios.post('/search/jobs', {
        user_id: 8
    });

    return (dispatch) =>
        request.then((response) => {
            dispatch({
                type: GET_JOBS_LIST,
                payload: response.data,
            });
        });
}

export function setJobActive(id) {

    return (dispatch) =>
        dispatch({
            type: SET_JOB_ACTIVE,
            payload: id,
        });
}

export function clear() {

    return (dispatch) => dispatch({ type: CLEAR });
}

export function changeStatus({id, status}) {
    const request = axios.post('/action/job_status', {
        'job_id': id,
        'status': status
    });

    return (dispatch) =>
        request
            .then(() => {
                dispatch(GeneralActions.showMessage({
                    message: 'Job status changed',
                    variant: 'success'
                }));
                dispatch(getJobsList());
            })
            .catch(() => {
                dispatch(GeneralActions.showMessage({
                    message: 'Error',
                    variant: 'error'
                }));
            })
}