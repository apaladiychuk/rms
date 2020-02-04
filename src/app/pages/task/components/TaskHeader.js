import React from 'react';
import {Button, Icon, Typography} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import * as Actions from '../store/actions';

function TaskHeader() {

    const dispatch = useDispatch();

    const info = useSelector(({taskApp}) => taskApp.task.info);

    const handleSubmitForm = () => {
        if (info.locState.operation === 'DEL') {
            return dispatch(Actions.disconnectTask());
        }

        if (info.locState.operation === 'HND') {
            return dispatch(Actions.handoverTask());
        }

        dispatch(Actions.createTask());
    };

    return (
        <div className="flex items-center w-full">
            <div className="flex flex-col items-start mr-a">
                <Typography
                    className="flex-inline items-center mb-5 text-15"
                    component={Link}
                    role="button"
                    to={`/order/${info.locState.order_id}`}
                    color="inherit"
                >
                    <Icon className="mr-5 text-15">arrow_back</Icon>
                    Заявка {info.locState.order_id}
                </Typography>
                <div className="flex items-center">
                    <Icon className="mr-15">assignment</Icon>
                    <Typography component="h1" noWrap variant="h5">
                        {
                            info.type === 'new' ? 'Создание Задачи' : 'Редактирование Задачи'
                        }
                    </Typography>
                </div>
            </div>
            <Button
                className="ml-a"
                color="inherit"
                variant="outlined"
                startIcon={<SaveIcon />}
                onClick={handleSubmitForm}
            >
                Сохранить
            </Button>
        </div>
    );
}

export default TaskHeader;