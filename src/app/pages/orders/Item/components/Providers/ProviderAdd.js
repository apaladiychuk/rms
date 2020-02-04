import React, {useEffect, useState, useRef} from 'react';
import {
    Grid,
    Paper,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    Button
} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import AddIcon from "@material-ui/icons/AddBox";
import {useDispatch} from "react-redux";
import * as Actions from "../../store/actions";
import useForm from "../../../../../../@theme/useForm";

const useStyles = makeStyles({
    formControl: {
        width: 300,
    },
});

function ProviderAdd({ providers }) {

    const classes = useStyles();
    const dispatch = useDispatch();

    const {form, handleChange, resetForm} = useForm({
        provider_id: ''
    });

    const inputLabel = useRef(null);
    const [labelWidth, setLabelWidth] = useState(0);

    useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    const addProvider = () => {
        dispatch(Actions.createProvider(form.provider_id));
        resetForm();
    };

    return (
        <Grid item xs={12}>
            <Paper className="p-15 flex justify-between items-center">
                <FormControl variant="outlined" size="small" className={classes.formControl}>
                    <InputLabel ref={inputLabel} className="text-15">
                        Провайдер
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        name="provider_id"
                        value={form.provider_id}
                        onChange={handleChange}
                        labelWidth={labelWidth}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {
                            Boolean(providers.length) && providers.map((item) => (
                                <MenuItem value={item.id} key={item.id}>
                                    {item.name}
                                </MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
                <Button
                    color="primary"
                    variant="outlined"
                    startIcon={<AddIcon/>}
                    onClick={addProvider}
                    disabled={form.provider_id === ''}
                >
                    Добавить
                </Button>
            </Paper>
        </Grid>
    );
}

export default ProviderAdd;