import axios from 'axios';

export const GET_AUDIT_LIST = '[AUDIT APP] GET AUDIT LIST';
export const CLEAR = '[AUDIT APP] CLEAR';

export function getAuditList() {

    const request = axios.get('/sql/sys_logs');

    return (dispatch) =>
        request.then((response) => {

            dispatch({
                type: GET_AUDIT_LIST,
                payload: response.data.data.sys_logs,
            })
        });
}

export function clear() {

    return (dispatch) => dispatch({ type: CLEAR })
}