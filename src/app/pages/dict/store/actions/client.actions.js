import axios from "axios";
import {GET_DICTS_LIST} from "./const";

export function getClientsList(){
    const request = axios.get('/dict/clients');
    return (dispatch) =>
        request.then((response) => {
            console.log(response.data);
            dispatch({
                type: GET_DICTS_LIST,
                payload: response.data.clients ,
            })
        });
}
