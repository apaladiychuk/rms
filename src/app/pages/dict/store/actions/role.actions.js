import axios from "axios";
import {GET_DICTS_LIST} from "./const";

export function getRoleList(){
    const request = axios.get('/security/roles');
    return (dispatch) =>
        request.then((response) => {
            console.log(response.data);
            dispatch({
                type: GET_DICTS_LIST,
                payload: response.data.roles ,
            })
        });
}
