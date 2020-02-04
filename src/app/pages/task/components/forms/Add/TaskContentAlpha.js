import React, {useEffect, useRef, useState} from 'react';
import {
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    FormControlLabel,
    Checkbox,
    Typography
} from "@material-ui/core";
import DateFnsUtils from '@date-io/date-fns';
import {KeyboardDatePicker, MuiPickersUtilsProvider,} from '@material-ui/pickers';
import * as Actions from '../../../store/actions';
import {useDispatch, useSelector} from "react-redux";
import useForm from "../../../../../../@theme/useForm";

function TaskContentAlpha() {

    const dispatch = useDispatch();

    const clients = useSelector(({taskApp}) => taskApp.task.clients);
    const tariffs = useSelector(({taskApp}) => taskApp.task.tariffs);

    const {form, handleChange, setForm} = useForm({
        value: '',
        businessType: '',
        client: '',
        date1: null,
        date2: null,
        providerTariff: '',
        abonPay: '',
        comment: '',
        brendAltel: 0,
        brendTele2: 0,
        systemIdAltel: '',
        systemIdTele2: '',
    });

    const inputLabel = useRef(null);
    const inputLabelClient = useRef(null);
    const inputLabelPTariff = useRef(null);
    const [labelWidth, setLabelWidth] = useState(0);
    const [labelWidthClient, setLabelWidthClient] = useState(0);
    const [labelWidthPTariff, setLabelWidthPTariff] = useState(0);

    useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
        setLabelWidthClient(inputLabelClient.current.offsetWidth);
        setLabelWidthPTariff(inputLabelPTariff.current.offsetWidth);
    }, []);

    useEffect(() => {
        dispatch(Actions.updateTaskForm(form))
    }, [form, dispatch]);

    useEffect(() => {
        dispatch(Actions.getClients());
        dispatch(Actions.getTariffs());
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
                <TextField
                    label="Номер"
                    type="text"
                    name="value"
                    value={form.value}
                    onChange={handleChange}
                    variant="outlined"
                    required
                    fullWidth
                />
            </Grid>
            <Grid item xs={6}>
                <FormControl variant="outlined" className="w-full">
                    <InputLabel ref={inputLabel}>
                        Тип бизнеса
                    </InputLabel>
                    <Select
                        name="businessType"
                        value={form.businessType}
                        onChange={handleChange}
                        labelWidth={labelWidth}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="B2B">B2B</MenuItem>
                        <MenuItem value="B2C">B2C</MenuItem>
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
            <Grid item xs={6}>
                <FormControl variant="outlined" className="w-full">
                    <InputLabel ref={inputLabelClient}>
                        Клиент
                    </InputLabel>
                    <Select
                        name="client"
                        value={form.client}
                        onChange={handleChange}
                        labelWidth={labelWidthClient}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {
                            Boolean(clients.length) && clients.map(({ id, name }) => (
                                <MenuItem value={id} key={id}>{name}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl variant="outlined" className="w-full">
                    <InputLabel ref={inputLabelPTariff}>
                        Тариф провайдера
                    </InputLabel>
                    <Select
                        name="providerTariff"
                        value={form.providerTariff}
                        onChange={handleChange}
                        labelWidth={labelWidthPTariff}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {
                            Boolean(tariffs.length) && tariffs.map(({ id, name }) => (
                                <MenuItem value={id} key={id}>{name}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="Абонплата"
                    type="number"
                    name="abonPay"
                    value={form.abonPay}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                />
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body1">
                    Бренд
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <div className="flex items-center">
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={Boolean(form.brendAltel)}
                                onChange={(e) => {
                                    handlerSetCustomForm(e.target.checked ? 1 : 0, 'brendAltel')
                                }}
                                name="brendAltel"
                                color="primary"
                            />
                        }
                        label="Altel"
                    />
                    <TextField
                        label="System ID"
                        type="number"
                        name="systemIdAltel"
                        value={form.systemIdAltel}
                        onChange={handleChange}
                        variant="outlined"
                        fullWidth
                    />
                </div>
            </Grid>
            <Grid item xs={6}>
                <div className="flex items-center">
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={Boolean(form.brendTele2)}
                                onChange={(e) => {
                                    handlerSetCustomForm(e.target.checked ? 1 : 0, 'brendTele2')
                                }}
                                name="brendTele2"
                                color="primary"
                            />
                        }
                        label="Tele2"
                    />
                    <TextField
                        label="System ID"
                        type="number"
                        name="systemIdTele2"
                        value={form.systemIdTele2}
                        onChange={handleChange}
                        variant="outlined"
                        fullWidth
                    />
                </div>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label="Комментарий"
                    type="text"
                    name="comment"
                    multiline
                    rows="4"
                    value={form.comment}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                />
            </Grid>
        </Grid>
    );
}

export default TaskContentAlpha;