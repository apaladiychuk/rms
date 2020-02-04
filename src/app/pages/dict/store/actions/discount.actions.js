import axios from "axios";
import {GET_DICT, GET_DICTS_LIST} from "./const";
import * as GeneralActions from "../../../../store/actions";
import {getRegion} from "./region.actions";
import history from "../../../../../@history";

export function getDiscountList(){
    const request = axios.get('/dict/discounts');
    return (dispatch) =>
        request.then((response) => {
            console.log(response.data);
            dispatch({
                type: GET_DICTS_LIST,
                payload: response.data.discounts ,
            })
        });
}

export function getDiscount(id) {
    const request = axios.get(`/dict/discounts/${id}`);
    return (dispatch) =>
        request.then((response) => {
            dispatch({
                type: GET_DICT,
                payload: response.data['discount']
            });
        });
}

export function saveDiscount(){
    return ( dispatch , getData) =>{
        const data = getData().dictsApp.dict.data;
        var request ;
        if ( data.id === undefined || data.id === 0  ){
            request = axios.post('/dict/discounts',data)
        } else {
            const url = '/dict/discounts/'+ data.id ;
            const req = {
                url,
                method: 'PUT',
                data: data
            }

            //request = axios.request(req)
            request = axios.put(url,data)
        }
        request.then((response) => {
            dispatch(GeneralActions.showMessage({
                message: 'Данные сохранены',
                variant: 'success'
            }));

            //dispatch(getRegion(data.id));
            history.push("/number_category")
        });
    }
}