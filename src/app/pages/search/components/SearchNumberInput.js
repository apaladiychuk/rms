import React from 'react';
import clsx from 'clsx';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import reducer from "../store/reducers";
import {useDispatch} from "react-redux";
import withReducer from "../../../store/withReducer";
import * as Actions from "../store/actions";

function NumberInput(props) {
    const {description, ...other} = props;
    const dispatch = useDispatch();
    const styles = theme => ({
        field: {
            marginLeft: theme.spacing.unit,
            marginRight: theme.spacing.unit,
            height: '30px !important'
        },
    });
    const stylesError = theme => ({
        field: {
            marginLeft: theme.spacing.unit,
            marginRight: theme.spacing.unit,
            height: '50px !important'

        },
    });
    const onChange = (v) => {
        dispatch(Actions.addSearchParam({id: description.id, value: v.target.value}));
    };

    return (
        <TextField
            className="search__param"
            variant="outlined"
            label={description.title}
            required={true}
            id="outlined-basic"
            onChange={onChange}
            fullWidth
        />
    )
}

export default NumberInput;
