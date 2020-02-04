import React, {useEffect, useRef, useState} from 'react';
import {
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
} from "@material-ui/core";
import DateFnsUtils from '@date-io/date-fns';
import {KeyboardDatePicker, MuiPickersUtilsProvider,} from '@material-ui/pickers';
import * as Actions from '../../../store/actions';
import {useDispatch, useSelector} from "react-redux";
import useForm from "../../../../../../@theme/useForm";

function TaskContentHnd() {

    const dispatch = useDispatch();

    const numbers = useSelector(({taskApp}) => taskApp.task.numbers);
    const providers = useSelector(({taskApp}) => taskApp.task.providers);

    const {form, handleChange, setForm} = useForm({
        numbers: [],
        date1: null,
        provider_id: ''
    });

    const inputLabel = useRef(null);
    const inputLabelProv = useRef(null);
    const [labelWidth, setLabelWidth] = useState(0);
    const [labelWidthProv, setLabelWidthProv] = useState(0);

    useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
        setLabelWidthProv(inputLabelProv.current.offsetWidth);
    }, []);

    useEffect(() => {
        dispatch(Actions.updateTaskForm(form))
    }, [form, dispatch]);

    useEffect(() => {
        dispatch(Actions.getHandoverData());
    }, [dispatch]);

    const handlerSetCustomForm = (value, name) => {
        setForm({
            ...form,
            [name]: value
        });
    };

    return (
        <Grid container spacing={3}>
            <Grid item xs={6}>
                <FormControl variant="outlined" className="w-full">
                    <InputLabel ref={inputLabel}>
                        Номер
                    </InputLabel>
                    <Select
                        name="numbers"
                        value={form.numbers}
                        onChange={handleChange}
                        labelWidth={labelWidth}
                        multiple
                    >
                        {
                            Boolean(numbers.length) && numbers.map(({ value, res_id }) => (
                                <MenuItem
                                    value={res_id}
                                    key={res_id}
                                >
                                    {value}
                                </MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
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
            <Grid item xs={6}>
                <FormControl variant="outlined" className="w-full">
                    <InputLabel ref={inputLabelProv}>
                        Новый владелец
                    </InputLabel>
                    <Select
                        name="provider_id"
                        value={form.provider_id}
                        onChange={handleChange}
                        labelWidth={labelWidthProv}
                    >
                        {
                            Boolean(providers.length) && providers.map(({ name, id }) => (
                                <MenuItem
                                    value={id}
                                    key={id}
                                >
                                    {name}
                                </MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
    );
}

export default TaskContentHnd;