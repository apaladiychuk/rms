import { combineReducers } from 'redux';
import dict from './dicts.reducer';

const reducer = combineReducers({
    dict,
});

export default reducer;
