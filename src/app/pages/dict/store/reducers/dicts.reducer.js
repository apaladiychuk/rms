import * as Actions from '../actions';

const initialState = {
    list: [],
    data: null
};

const dictsReducer = function (state = initialState, action) {
    switch (action.type) {
        case Actions.CLEAR_DATA:{
            return {
                ...initialState,
            }
        }
        case Actions.UPDATE_DICT_FORM: {
            console.log ( '===== dispatcher ');
            console.log(action.payload);
            return {
                ...state,
                data: action.payload
            };
        }
        case Actions.GET_DICTS_LIST: {
            return {
                ...state,
                list: action.payload
            };
        }
        case Actions.GET_DICT: {
            return {
                ...state,
                data: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};




export default dictsReducer;
