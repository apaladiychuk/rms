import * as Actions from '../actions';

const initialState = {
    form: null,
    clients: [],
    tariffs: [],
    numbers: [],
    providers: [],
    info: {
        type: false,
        locState: null,
    }
};

const taskReducer = function (state = initialState, action) {
    switch (action.type) {
        case Actions.UPDATE_TASK_FORM: {
            return {
                ...state,
                form: action.payload
            };
        }
        case Actions.GET_CLIENT: {
            return {
                ...state,
                clients: action.payload
            };
        }
        case Actions.GET_TARIFFS: {
            return {
                ...state,
                tariffs: action.payload
            };
        }
        case Actions.GET_NUMBERS: {
            return {
                ...state,
                numbers: action.payload
            };
        }
        case Actions.GET_PROVIDERS: {
            return {
                ...state,
                providers: action.payload
            };
        }
        case Actions.CONTROL_TASK_TYPE: {
            return {
                ...state,
                info: {
                    ...state.info,
                    type: action.payload
                }
            };
        }
        case Actions.CONTROL_TASK_LOCSTATE: {
            return {
                ...state,
                info: {
                    ...state.info,
                    locState: action.payload
                }
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

export default taskReducer;
