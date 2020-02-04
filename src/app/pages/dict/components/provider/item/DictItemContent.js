import React, {useEffect} from 'react';

import {Typography, Grid, Paper, Divider, TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import useForm from "../../../../../../@theme/useForm";
import {useDispatch, useSelector} from "react-redux";
import Select from "@material-ui/core/Select";
import * as Actions from "../../../store/actions";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import {dict_status} from "../../../../../../constans";

function DictItemContent() {
    const dispatch = useDispatch();

    const data = useSelector(({dictsApp}) => dictsApp.dict.data);
    console.log(data);
    const {form, handleChange, setForm } = useForm({
        id :data.id,
        name: data.name,
        comment : data.comment,
        status : data.status,
        active_from: data.active_from,
        active_to : data.active_to
    });
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
    const dictArr  = []
    for ( const key  in dict_status){
        dictArr.push(
            {
                id: key,
                name: dict_status[key].name
            }
        )
    }
    const handlerSetCustomForm = (value, name) => {
        setForm({
            ...form,
            [name]: value
        });
    };

    useEffect(() => {
        dispatch(Actions.updateDictForm(form))
    }, [form, dispatch]);


    return (
        <div  className="w-full">
            <Grid container spacing={3} item xs={12} >
                <Grid item xs={6}>
                    <TextField
                        id="tf-name"
                        name="name"
                        label="Название"
                        requred={true}
                        value={form.name}
                        onChange={handleChange}
                        fullWidth={1}
                        variant="outlined">
                    </TextField>
                </Grid>
                <Grid item xs={6}>

                    <Select
                        labelId="demo-mutiple-checkbox-label"
                        id="demo-mutiple-checkbox"
                        name="status"
                        value={form.status}
                        onChange={handleChange}
                        // input={<Input />}
                        MenuProps={MenuProps}
                    >
                        {dictArr.map(row => (
                            <MenuItem  value={row.id} id={row.id}>
                                <ListItemText primary={row.name} />
                            </MenuItem>
                        ))}
                    </Select>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="БИН"
                        name="bin"
                        fullWidth={1}
                        value={form.bin}
                        onChange={handleChange}
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
                            requred={true}
                            name ="active_from"
                            value={form.active_from}
                            maxDate={form.active_to}
                            onChange={(e) => handlerSetCustomForm(e, 'active_from')}
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
                            name ="active_from"
                            value={form.active_to}
                            minDate={form.active_from}
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
                        fullWidth={1}
                        name="comment"
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