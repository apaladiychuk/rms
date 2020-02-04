import axios from "axios";
import {GET_DICTS_LIST} from "./const";

export function getUserList(){
    const request = axios.get('/security/users');
    return (dispatch) =>
        request.then((response) => {
            console.log(response.data);
            dispatch({
                type: GET_DICTS_LIST,
                payload: response.data.data ,
            })
        });
}
