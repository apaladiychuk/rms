import React, {useEffect, useState} from 'react';
import TaskHeader from './components/TaskHeader';
import TaskContent from './components/TaskContent';
import PageLayout from "../../components/pageLayout/PageLayout";
import {useDispatch, useSelector} from 'react-redux';
import * as Actions from './store/actions';
import reducer from './store/reducers';
import withReducer from "../../store/withReducer";

import './styles/task.scss';

function TaskApp(props) {
    const dispatch = useDispatch();

    const locState = useSelector(({taskApp}) => taskApp.task.info.locState);

    useEffect(() => {
        if (props.match.params.ID === 'new') {
            if (!props.location.state) {
                props.history.push('/');
            }
            dispatch(Actions.controlTaskType('new'));
            dispatch(Actions.controlTaskLocState(props.location.state));
        } else {
            dispatch(Actions.controlTaskType('edit'));
            // Action Creator get task with ID
            // dispatch(Actions.getTask());
        }

        return () => {
            dispatch(Actions.clear());
        }
    }, [dispatch, props.match.params.ID, props.history, props.location.state]);

    if (!locState) return null;

    return (
        <PageLayout
            header={<TaskHeader />}
            content={<TaskContent />}
            formContent
        />
    );
}

export default withReducer('taskApp', reducer)(TaskApp);