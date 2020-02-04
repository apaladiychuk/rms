import React from 'react';
import {Button, Icon, Typography} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import CancelIcon from "@material-ui/icons/Cancel";
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import history from '../../../../../@history';
import withReducer from "../../../../store/withReducer";
import reducer from "../../store/reducers";

function DictItemHeader(props ) {
   const  {title , url ,  saveaction ,data, ...others }  = props ;
    const dispatch = useDispatch();

    return (
        <div className="flex items-center w-full">
            <div className="flex flex-col items-start mr-a">
                <Typography
                    className="flex-inline items-center mb-5 text-15"
                    component={Link}
                    role="button"
                    to={url}
                    color="inherit"
                >
                    <Icon className="mr-5 text-15">arrow_back</Icon>
                    {title}
                </Typography>
                <div className="flex items-center">
                    <Icon className="mr-15">list_alt</Icon>
                    <Typography component="h1" noWrap variant="h5">
                        {data.status === 'N' ? 'Создание' : 'Редактирование'}
                    </Typography>
                </div>
            </div>
                    <Button
                        color="inherit"
                        variant="outlined"
                        startIcon={<SaveIcon />}
                        onClick={() => dispatch(saveaction)}
                    >
                        Сохранить
                    </Button>

            <Button
                className="ml-5"
                color="inherit"
                variant="outlined"
                startIcon={<CancelIcon />}
                onClick={() => history.push(url)}
            >
                Отменить
            </Button>
        </div>
    );
}

export default DictItemHeader;