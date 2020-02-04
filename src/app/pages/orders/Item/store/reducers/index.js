import { combineReducers } from 'redux';
import orderItem from './orderItem.reducer';

const reducer = combineReducers({
    orderItem,
});

export default reducer;
