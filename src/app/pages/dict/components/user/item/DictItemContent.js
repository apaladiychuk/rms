import React, {useEffect} from 'react';

import {Typography, Grid, Paper, Divider, TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import useForm from "../../../../../../@theme/useForm";
import {useDispatch, useSelector} from "react-redux";
import Select from "@material-ui/core/Select";
import * as Actions from "../../../store/actions";

function DictItemContent() {
    const dispatch = useDispatch();

    const useStyles = makeStyles({
        barColumn: {
            position: 'relative',
        },
        barColumnIndicator: {
            position: 'absolute',
            width: 20,
            height: 20,
            borderRadius: 10,
            top: -27,
            left: '50%',
            transform: 'translateX(-50%)',
        },
        barCards: {
            marginTop: 12
        },
        root: {
            height: 10,
            backgroundColor: '#e6e6e6',
            borderRadius: 20,
        },
        bar: props => ({
            borderRadius: 20,
            backgroundColor: props.backgroundColor,
        }),
    });
    const data = useSelector(({dictsApp}) => dictsApp.dict.data);
    const {form, handleChange} = useForm({
        id :data.id,
        name: data.name,
        comment : data.comment,
        active_from: data.active_from,
        active_to : data.active_to
    });
    const [ activeFrom, setActiveFrom ] = React.useState(data.active_from);
    const [ activeTo, setActiveTo ] = React.useState(data.active_to);
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };
    const handleFromDateChange = date => {
        form.active_from = date ;
        setActiveFrom(date)
    };
    const handleTillDateChange = date => {
        form.active_to = date ;
        setActiveTo(date)
    };
    useEffect(() => {
        console.log('-------------------');
        console.log(form);
        dispatch(Actions.updateDictForm(form))
    }, [form, dispatch]);


    return (
        <div  className="w-full">
            <Grid container spacing={3} item xs={12} >
                <Grid item xs={6}>
                    <TextField
                        id="tf-name"
                        label="Название"
                        value={form.name}
                        onChange={handleChange}
                        fullWidth={1}
                        variant="outlined">
                    </TextField>
                </Grid>

                <Grid item xs={3}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="dd/MM/yyyy"
                            margin="normal"
                            id="date-picker-from"
                            label="с даты"
                            autoOk={1}
                            value={activeFrom}
                            onChange={handleFromDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>

                </Grid>
                <Grid item xs={3}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="dd/MM/yyyy"
                            margin="normal"
                            id="date-picker-till"
                            label="по дату"
                            autoOk={1}
                             value={activeTo}
                            onChange={handleTillDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Комментарий"
                        fullWidth={1}
                        value={form.comment}
                        onChange={handleChange}
                        variant="outlined">
                    </TextField>
                </Grid>
            </Grid>
        </div>
    );
}

export default DictItemContent;