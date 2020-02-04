import React, {useEffect} from 'react';

import {Typography, Grid, Paper, Divider, TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import useForm from "../../../../../../@theme/useForm";
import {useDispatch, useSelector} from "react-redux";
import * as Actions from "../../../store/actions";

function DictItemContent() {
    const dispatch = useDispatch();
    const data = useSelector(({dictsApp}) => dictsApp.dict.data);
    const {form, handleChange,setForm} = useForm({
        discount_cd :data.discount_cd,
        description: data.description,
        comment : data.comment,
        active_from: data.active_from,
        active_to : data.active_to
    });

    const handlerSetCustomForm = (value, name) => {
        setForm({
            ...form,
            [name]: value
        });
    };
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
                        name="discount_cd"
                        label="Код"
                        value={form.discount_cd}
                        onChange={handleChange}
                        fullWidth={1}
                        variant="outlined">
                    </TextField>
                </Grid>

                <Grid item xs={6}>
                    <TextField
                        name="description"
                        label="Код"
                        value={form.description}
                        onChange={handleChange}
                        fullWidth={1}
                        variant="outlined">
                    </TextField>
                </Grid>

                <Grid item xs={6}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="dd/MM/yyyy"
                            margin="normal"
                            id="date-picker-from"
                            label="с даты"
                            autoOk={1}
                            name="active_from"
                            maxDate={form.active_to}
                            value={form.active_from}
                            onChange={(e) => handlerSetCustomForm(e, 'active_from')}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>

                </Grid>
                <Grid item xs={6}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="dd/MM/yyyy"
                            margin="normal"
                            id="date-picker-till"
                            label="по дату"
                            autoOk={1}
                            name="active_to"
                            minDate={form.active_from}
                            value={form.active_to}
                            onChange={(e) => handlerSetCustomForm(e, 'active_to')}

                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Комментарий"
                        name="comment"
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