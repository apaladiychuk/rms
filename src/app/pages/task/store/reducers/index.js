import { combineReducers } from 'redux';
import task from './task.reducer';

const reducer = combineReducers({
    task,
});

export default reducer;
