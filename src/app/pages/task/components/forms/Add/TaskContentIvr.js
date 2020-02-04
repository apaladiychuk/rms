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

function TaskContentIvr() {

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
        trafficType: '',
        brendAltel: 0,
        brendTele2: 0,
        systemIdAltel: '',
        systemIdTele2: '',
        billingId: '',
        discount: '',
        pay1: '',
        minIncom: '',
        providerPercent: '',
        withoutTarif: '',
        ivrDirection: '',
        connectType: '',
        numberCategory: '',
        tariffAbon: '',
    });

    const inputLabel = useRef(null);
    const inputLabelClient = useRef(null);
    const inputLabelPTariff = useRef(null);
    const inputLabelTTariff = useRef(null);
    const inputLabelDir = useRef(null);
    const inputLabelCt = useRef(null);
    const inputLabelNc = useRef(null);
    const [labelWidth, setLabelWidth] = useState(0);
    const [labelWidthClient, setLabelWidthClient] = useState(0);
    const [labelWidthPTariff, setLabelWidthPTariff] = useState(0);
    const [labelWidthTTariff, setLabelWidthTTariff] = useState(0);
    const [labelWidthDir, setLabelWidthDir] = useState(0);
    const [labelWidthCt, setLabelWidthCt] = useState(0);
    const [labelWidthNc, setLabelWidthNc] = useState(0);

    useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
        setLabelWidthClient(inputLabelClient.current.offsetWidth);
        setLabelWidthPTariff(inputLabelPTariff.current.offsetWidth);
        setLabelWidthTTariff(inputLabelTTariff.current.offsetWidth);
        setLabelWidthDir(inputLabelDir.current.offsetWidth);
        setLabelWidthCt(inputLabelCt.current.offsetWidth);
        setLabelWidthNc(inputLabelNc.current.offsetWidth);
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
            <Grid item xs={6}>
                <FormControl variant="outlined" className="w-full">
                    <InputLabel ref={inputLabelTTariff}>
                        Тип трафика
                    </InputLabel>
                    <Select
                        name="trafficType"
                        value={form.trafficType}
                        onChange={handleChange}
                        labelWidth={labelWidthTTariff}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="NAT">NAT</MenuItem>
                        <MenuItem value="INT">INT</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="Billing ID"
                    type="number"
                    name="billingId"
                    value={form.billingId}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="Скидка"
                    type="number"
                    name="discount"
                    value={form.discount}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="Единовременный платёж"
                    type="number"
                    name="pay1"
                    value={form.pay1}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="Минимальное вознаграждение"
                    type="number"
                    name="minIncom"
                    value={form.minIncom}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="Доля провайдера(%)"
                    type="number"
                    name="providerPercent"
                    value={form.providerPercent}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="Нетарифицируемый порог(сек)"
                    type="number"
                    name="withoutTarif"
                    value={form.withoutTarif}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="Тариф абонента"
                    type="number"
                    name="tariffAbon"
                    value={form.tariffAbon}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                />
            </Grid>
            <Grid item xs={6}>
                <FormControl variant="outlined" className="w-full">
                    <InputLabel ref={inputLabelDir}>
                        Направление трафика
                    </InputLabel>
                    <Select
                        name="ivrDirection"
                        value={form.ivrDirection}
                        onChange={handleChange}
                        labelWidth={labelWidthDir}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="IN">IN</MenuItem>
                        <MenuItem value="OUT">OUT</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl variant="outlined" className="w-full">
                    <InputLabel ref={inputLabelCt}>
                        Тип подключения
                    </InputLabel>
                    <Select
                        name="connectType"
                        value={form.connectType}
                        onChange={handleChange}
                        labelWidth={labelWidthCt}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="SIP">SIP</MenuItem>
                        <MenuItem value="SIP">SIP</MenuItem>
                        <MenuItem value="FORW">FORW</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl variant="outlined" className="w-full">
                    <InputLabel ref={inputLabelNc}>
                        Категория
                    </InputLabel>
                    <Select
                        name="numberCategory"
                        value={form.numberCategory}
                        onChange={handleChange}
                        labelWidth={labelWidthNc}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="GOLD">GOLD</MenuItem>
                        <MenuItem value="SILVER">SILVER</MenuItem>
                        <MenuItem value="BRONZE">BRONZE</MenuItem>
                    </Select>
                </FormControl>
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

export default TaskContentIvr;