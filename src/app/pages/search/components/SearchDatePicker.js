import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import * as Actions from '../store/actions';
import withReducer from "../../../store/withReducer";
import reducer from "../store/reducers";
import {useDispatch} from "react-redux";

function SearchDatePicker(props) {
    const { description , ...other } = props;
    // The first commit of Material-UI
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = date => {
        setSelectedDate(date);
        dispatch(Actions.addSearchParam({id:description.id, value: date }));
    };
    const dispatch = useDispatch();

    return (
        <MuiPickersUtilsProvider className= "search__param" utils={DateFnsUtils}>
                <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="dd/MM/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label={description.title}
                    autoOk={1}
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
        </MuiPickersUtilsProvider>
    );
}

export default SearchDatePicker;