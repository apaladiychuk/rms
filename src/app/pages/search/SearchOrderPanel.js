import React from 'react';
import Button from '@material-ui/core/Button'
import {NumberParamType} from './const';
import * as Actions from './store/actions'
import { Grid } from '@material-ui/core';
import NumberInput from './components/SearchNumberInput';
import {useDispatch} from "react-redux";
import SearchIcon from "@material-ui/icons/Search";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import useForm from "../../../@theme/useForm";

function SearchOrderPanel() {
    const dispatch = useDispatch();

    const {form, setForm} = useForm({
        date1: null,
        date2: null,
    });

    const requestData = () => {
        dispatch(Actions.getNumberResult());
    };

    const handlerSetCustomForm = (value, name) => {
        setForm({
            ...form,
            [name]: value
        });
    };

    return (
        <Grid>
            <Grid
                container
                spacing={3}
                justify="start"
                alignItems="start"
                direction="row"
            >
                <Grid item xs={3}>
                    <NumberInput description={NumberParamType.number}/>
                </Grid>
                <Grid item xs={3}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            label="Период с"
                            className="w-full"
                            format="dd-MM-yyyy"
                            inputVariant="outlined"
                            name="date1"
                            value={form.date1}
                            onChange={(e) => handlerSetCustomForm(e, 'date1')}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                            required
                        />
                    </MuiPickersUtilsProvider>
                </Grid>
                <Grid item xs={3}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            label="Период по"
                            className="w-full"
                            format="dd-MM-yyyy"
                            inputVariant="outlined"
                            name="date2"
                            minDate={form.date1}
                            value={form.date2}
                            onChange={(e) => handlerSetCustomForm(e, 'date2')}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                </Grid>
                <Grid item xs={12}>
                    <Button
                        className="ml-a"
                        color="inherit"
                        variant="outlined"
                        startIcon={<SearchIcon/>}
                        onClick={requestData}>Поиск</Button>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default SearchOrderPanel;