import axios from "axios";
import {GET_DICTS_LIST} from "./const";

export function getTarifList(){
    const request = axios.get('/dict/tariffs');
    return (dispatch) =>
        request.then((response) => {
            console.log(response.data);
            dispatch({
                type: GET_DICTS_LIST,
                payload: response.data.tariffs ,
            })
        });
}
