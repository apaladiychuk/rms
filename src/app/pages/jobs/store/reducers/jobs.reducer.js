import * as Actions from '../actions';

const initialState = {
    list: null,
    active_job_id: ''
};

const jobsReducer = function (state = initialState, action) {
    switch (action.type) {
        case Actions.GET_JOBS_LIST: {
            return {
                ...state,
                list: action.payload
            };
        }
        case Actions.SET_JOB_ACTIVE: {
            return {
                ...state,
                active_job_id: action.payload
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

export default jobsReducer;
