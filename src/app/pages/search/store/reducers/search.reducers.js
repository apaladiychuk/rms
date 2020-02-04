import * as Actions from "../actions";
import {NumberParamType} from "../../const";

const initialState = {
    list: {},
    result: [],
    paramList:NumberParamType
};

const searchReducer = function (state = initialState, action) {
    switch (action.type) {
        case Actions.ADD_SEARCH_PARAM: {
            return {
                ...state,
                list: {...state.list , ...action.payload}
            };
        }
        case Actions.DEL_SEARCH_PARAM: {
            delete state.list[action.payload]
            return {
                ...state,
                list: {...state.list }
            };
        }
        case Actions.GET_NUMBER_RESULT:{
            return {
                ...state,
                result: action.payload
            }
        }
        case Actions.DISPLAY_PARAMETER:{
            return {
                ...state,
                paramList: {...state.paramList, ...action.payload}
            }
        }
        default: {
            return state;
        }
    }
};

export default searchReducer;
