import axios from "axios";
import * as GeneralActions from "../../../../store/actions";
import history from "../../../../../@history";

export const CLEAR_DATA = '[DICT APP] CLEAR DATA';
export const GET_DICT = '[DICT APP] GET DICT';
export const GET_DICTS_LIST = '[DICT APP] GET DICT LIST';
export const UPDATE_DICT_FORM = '[DICT APP] UPDATE DICT FORM';

export function clearData(){
    return (dispatch) =>
        dispatch({
            type: CLEAR_DATA,
        })
}
export function updateDictForm(data) {
    return (dispatch) =>
        dispatch({
            type: UPDATE_DICT_FORM,
            payload: data,
        })
}

export function getDictItem(url, payload, id) {
    const request = axios.get(`${url}/${id}`);
    return (dispatch) =>
        request.then((response) => {
            dispatch({
                type: GET_DICT,
                payload: response.data[payload]
            });
        });
}


export function saveDict(baseurl, redirect ){
    return ( dispatch , getData) =>{
        const data = getData().dictsApp.dict.data;
        var request ;
        if ( data.id === undefined || data.id === 0  ){
            request = axios.post(baseurl,data)
        } else {
            request = axios.put(baseurl+ '/'+ data.id,data)
        }
        request.then((response) => {
            dispatch(GeneralActions.showMessage({
                message: 'Данные сохранены',
                variant: 'success'
            }));
            history.push(redirect)
        });
    }
}
