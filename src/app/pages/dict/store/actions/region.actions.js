import axios from 'axios';
import * as GeneralActions from "../../../../store/actions/index";

import {CLEAR_DATA, GET_DICT, GET_DICTS_LIST, UPDATE_DICT_FORM} from "./const";
import history from "../../../../../@history";



export function getRegionList(){
    const request = axios.get('/dict/regions');
    return (dispatch) =>
        request.then((response) => {
            console.log(response.data);
            dispatch({
                type: GET_DICTS_LIST,
                payload: response.data.regions ,
            })
        });
}

export function createDictItem() {

    return (dispatch) => dispatch({
        type: GET_DICT,
        payload: {}
    });
}


export function getRegion(id) {
    const request = axios.get(`/dict/regions/${id}`);
    return (dispatch) =>
        request.then((response) => {
            dispatch({
                type: GET_DICT,
                payload: response.data['region']
            });
        });
}

export function saveRegion(){
    return ( dispatch , getData) =>{
        const data = getData().dictsApp.dict.data;
        var request ;
        if ( data.id === undefined || data.id === 0  ){
            request = axios.post('/dict/regions',data)
        } else {
            request = axios.put('/dict/regions/'+ data.id,data)
        }
        request.then((response) => {
            dispatch(GeneralActions.showMessage({
                message: 'Данные сохранены',
                variant: 'success'
            }));
            history.push("/regions")
        });
    }
}
