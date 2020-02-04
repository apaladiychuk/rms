import { combineReducers } from 'redux';
import audit from './audit.reducer';

const reducer = combineReducers({
    audit,
});

export default reducer;
