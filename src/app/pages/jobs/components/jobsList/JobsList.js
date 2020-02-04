import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {List, ListItem, Divider} from '@material-ui/core';
import JobsListItemHead from "./JobsListItemHead";
import JobsListItemMain from "./JobsListItemMain";

const useStyles = makeStyles(theme => ({
    list: {
        padding: 0
    },
    listItem: {
        display: 'block'
    },
}));

function JobsList({active_job_id, handleListItemClick, list}) {
    const classes = useStyles();

    return (
        <List component="nav" className={classes.list}>
            <Divider/>
            {
                Boolean(list.active_jobs.length) && list.active_jobs.map((id) => {
                    const item = list.jobs_idx[id];
                    const task = list.tasks_idx[item.task_id];

                    return (
                        <li key={id}>

                            <ListItem
                                button
                                selected={active_job_id === id}
                                onClick={() => handleListItemClick(id)}
                                className={classes.listItem}
                            >

                                <JobsListItemHead
                                    jobId={id}
                                    taskId={task.id}
                                    orderId={task.order_id}
                                />

                                <JobsListItemMain
                                    operation={task.task_type}
                                    resource_type={task.resource_type}
                                    status={item.status}
                                />

                            </ListItem>

                            <Divider/>

                        </li>
                    )
                })
            }
        </List>
    );
}

export default JobsList;