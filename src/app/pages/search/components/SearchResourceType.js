import React, {useEffect, useRef, useState} from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import {ResourceType} from '../const'
import * as Actions from '../store/actions';
import {useDispatch} from "react-redux";

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        heigth: 50,
        minWidth: 120,
        maxWidth: 300,
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
    },
    noLabel: {
        marginTop: theme.spacing(3),
    },
}));

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


function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

function ResourceTypeSelect(props) {
    const {description, ...other} = props;
    const classes = useStyles();
    const theme = useTheme();
    const [resourceType, setResourceType] = React.useState([]);
    const dispatch = useDispatch();
    const handleChange = event => {
        const newVal = event.target.value;
        setResourceType(newVal);
        dispatch(Actions.addSearchParam({
            id: description.id, value: newVal.map(r => {
                return r.id
            })
        }));
    };

    const inputLabel = useRef(null);
    const [labelWidth, setLabelWidth] = useState(0);

    useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    return (
        <FormControl variant="outlined" className="w-full">
            <InputLabel ref={inputLabel}>
                {description.title}
            </InputLabel>
            <Select
                name="numbers"
                value={resourceType}
                onChange={handleChange}
                labelWidth={labelWidth}
                multiple
                renderValue={selected => {
                    return selected.map(r => {
                        return r.title
                    }).join(', ')
                }}
            >
                {ResourceType.map(row => (
                    <MenuItem key={row.id} value={row}>
                        <Checkbox checked={resourceType.indexOf(row) > -1}/>
                        <ListItemText primary={row.title}/>
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

export default ResourceTypeSelect;