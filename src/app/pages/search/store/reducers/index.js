import { combineReducers } from 'redux';
import search from './search.reducers';

const reducer = combineReducers({
    search,
});

export default reducer;
