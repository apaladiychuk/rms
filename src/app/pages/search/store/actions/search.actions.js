import axios from 'axios';
import {GET_ORDERS_LIST} from "../../../orders/store/actions";
import search from "../reducers/search.reducers";
import {ResourceType} from "../../const";

export const ADD_SEARCH_PARAM = '[SEARCH APP] ADD SEARCH PARAM';
export const DEL_SEARCH_PARAM = '[SEARCH APP] DEL SEARCH PARAM';
export const GET_NUMBER_RESULT = '[SEARCH APP] GET MEMEBER RESULT';

export const DISPLAY_PARAMETER = '[SEARCH APP] DISPLAY PARAMETER';

export function addSearchParam(param){
    return (dispatch) =>
        dispatch({
            type: ADD_SEARCH_PARAM,
            payload: {[param.id] : param.value },
        })
}

export function delSearchParam(param){
    return (dispatch) =>
        dispatch({
            type: DEL_SEARCH_PARAM,
            payload: param.id ,
        })
}

export function getNumberResult() {
    return (dispatch, getState) =>
    {
        const param = getState().searchApp.search.list;
        if ( param.resourceType === undefined || param.resourceType.length === 0 ){
            param.resourceType = ResourceType.filter(r=> {return r.id !== 'All'}).map(r=> {return r.id})
        }
        if ( param.number === undefined ){
            param.number = '';
        }
        console.log(param);
        const request =axios.post('search/resource',param );
        request.then((response) => {
            console.log(response.data);
            dispatch({
                type: GET_NUMBER_RESULT,
                payload: response.data.results,
            })
        })
            .catch(error => {
                console.log(error);
            });
    }

}
export function displayParameter(id, v){
    return ( dispatch, getState )=>{
        const param = getState().searchApp.search.paramList[id];
        if ( param !== undefined){
            param.visible = v
        }
        dispatch({
            type: DISPLAY_PARAMETER,
            payload: param ,
            }

        )
    }
}