import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import * as Actions from '../store/actions';
import withReducer from "../../../store/withReducer";
import reducer from "../store/reducers";

import {useDispatch, useSelector} from "react-redux";
import SearchIcon from "@material-ui/icons/Search";
import {HIDE} from "../const";

function SearchDateRangePicker(props) {
    const { description , hidden ,  ...other } = props;
    const list = useSelector(({searchApp}) => searchApp.search.list);

    const initVal = {from :new Date(), till:new Date()};
    if ( list[description.id] !== undefined ){
        initVal.from = list[description.id].from;
        initVal.till = list[description.id].till;
    }
    // The first commit of Material-UI
    const [selectedDate, setSelectedDate] = React.useState(initVal);

    const handleHideParam = ()=>{
        dispatch(Actions.delSearchParam(description.id));
        dispatch(Actions.displayParameter(description.id,HIDE))
    };

    const handleDateFromChange = date => {
        const nv = selectedDate;

        nv.from = date ;
        console.log(nv);
        setSelectedDate(nv);
        dispatch(Actions.addSearchParam({id:description.id, value: nv }));
    };
    const handleDateTillChange = date => {
        const nv = selectedDate;

        nv.till = date ;
        console.log(nv);
        setSelectedDate(nv);
        dispatch(Actions.addSearchParam({id:description.id, value: nv }));

    };

    const dispatch = useDispatch();

    return (
        <div hidden = {hidden}>
        <MuiPickersUtilsProvider  className= "search__param" utils={DateFnsUtils}>

                <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="dd/MM/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label={description.title + " с"}
                    autoOk={1}
                    value={selectedDate.from}
                    onChange={handleDateFromChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
            <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="dd/MM/yyyy"
                margin="normal"
                id="date-picker-inline"
                label = "по"
                autoOk={1}
                value={selectedDate.till}
                onChange={handleDateTillChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
            <Button
                className="ml-a"
                color="inherit"
                variant="outlined"
                startIcon={<HighlightOffIcon/>}
                onClick={handleHideParam}/>
        </MuiPickersUtilsProvider>
        </div>
    );
}

export default SearchDateRangePicker;