import React from 'react';
import {Link} from "react-router-dom";
import {Icon, Typography, Button} from "@material-ui/core";
import {
    AppBar ,
    Tabs,
    Tab,
    Box
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


export default function SearchHeader(props) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="flex items-center w-full">
            <Typography component="h1" noWrap variant="h5">Поиск</Typography>

        </div>
    );
}