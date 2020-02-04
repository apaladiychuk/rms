import * as Actions from '../actions';

const initialState = {
    list: [],
};

const auditReducer = function (state = initialState, action) {
    switch (action.type) {
        case Actions.GET_AUDIT_LIST: {
            return {
                ...state,
                list: action.payload
            };
        }
        case Actions.CLEAR: {
            return initialState;
        }
        default: {
            return state;
        }
    }
};

export default auditReducer;
