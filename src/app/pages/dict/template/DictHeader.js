import React from 'react';
import {Icon, Typography, Button} from "@material-ui/core";
import AddIcon from '@material-ui/icons/AddBox';
import { Link } from "react-router-dom";

function DictHeader(props) {
    const {title , newurl, ...others } = props;

    return (
        <div className="flex items-center w-full">
            <Icon className="mr-15">list_alt</Icon>
            <Typography component="h1" noWrap variant="h5">{title}</Typography>
            <Button
                className="ml-a"
                color="inherit"
                variant="outlined"
                startIcon={<AddIcon />}
                component={Link}
                to={newurl}
            >
                Создать
            </Button>
        </div>
    );
}

export default DictHeader;