import axios from "axios";
import {GET_DICTS_LIST} from "./const";
import * as GeneralActions from "../../../../store/actions";
import history from "../../../../../@history";


export function getNumberCategoriesList(){
    const request = axios.get('/dict/number_categories');
    return (dispatch) =>
        request.then((response) => {
            console.log(response.data);
            dispatch({
                type: GET_DICTS_LIST,
                payload: response.data.num_categories ,
            })
        });
}


export function saveNumberCategory(){
    return ( dispatch , getData) =>{
        const data = getData().dictsApp.dict.data;
        var request ;
        if ( data.id === undefined || data.id === 0  ){
            request = axios.post('/dict/number_categories',data)
        } else {
            const url = '/dict/number_categories/'+ data.id ;
            const req = {
                url,
                method: 'PUT',
                data: data
            }

            request = axios.put(req)
        }
        request.then((response) => {
            dispatch(GeneralActions.showMessage({
                message: 'Region saved',
                variant: 'success'
            }));

            //dispatch(getRegion(data.id));
            history.push("/discounts")
        });
    }
}