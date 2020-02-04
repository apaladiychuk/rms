import React from 'react';
import {Typography, Grid, Icon} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { job_operation, job_status, date_transform } from "../../../../../constans";
import HighlightedText from "../../../../components/HighlightedText";
import JobsInfoHeader from "./JobsInfoHeader";

const useStyles = makeStyles(theme => ({
    card: {
        margin: '20px 0',
    },
    cardListItem: {
        marginTop: 10,
        display: 'flex',
        alignItems: 'center'
    },
    cardListItemKey: {
        flexShrink: 0,
        width: 130,
        color: '#707070'
    },
    cardListItemValue: {
        width: '100%'
    },
}));

function JobsInfo({ job, task }) {
    const classes = useStyles();

    if (!job) return null;

    return (
        <div>
            <JobsInfoHeader
                jobId={job.id}
                taskId={task.id}
                orderId={task.order_id}
            />
            <Grid container spacing={3}>
                <Grid item xs={7}>
                    <div className={classes.card}>
                        <div className="cardTitleBlock">
                            <Typography
                                variant="subtitle1"
                                className="cardTitle"
                            >
                                Детали задачи
                            </Typography>
                        </div>
                        <div className={classes.cardListItem}>
                            <Typography variant="body2" className={classes.cardListItemKey}>
                                Статус:
                            </Typography>
                            <HighlightedText
                                text={job_status[job.status].name}
                                bg={job_status[job.status].color}
                            />
                        </div>
                        <div className={classes.cardListItem}>
                            <Typography variant="body2" className={classes.cardListItemKey}>
                                Тип ресурса:
                            </Typography>
                            <Typography variant="body2" className={classes.cardListItemValue}>
                                {task.resource_type}
                            </Typography>
                        </div>
                        <div className={classes.cardListItem}>
                            <Typography variant="body2" className={classes.cardListItemKey}>
                                Операция:
                            </Typography>
                            <div className="flex items-center">
                                <Icon
                                    style={{ color: job_operation[task.task_type].color }}
                                    fontSize="small"
                                    className="mr-5"
                                >
                                    {job_operation[task.task_type].icon}
                                </Icon>
                                <Typography variant="body2" className={classes.cardListItemValue}>
                                    {job_operation[task.task_type].name}
                                </Typography>
                            </div>
                        </div>
                        <div className={classes.cardListItem}>
                            <Typography variant="body2" className={classes.cardListItemKey}>
                                Ресурс:
                            </Typography>
                            <Typography variant="body2" className={classes.cardListItemValue}>
                                {task.value}
                            </Typography>
                        </div>
                    </div>
                    <div className={classes.card}>
                        <div className="cardTitleBlock">
                            <Typography
                                variant="subtitle1"
                                className="cardTitle"
                            >
                                Группа 1
                            </Typography>
                        </div>
                        <div className={classes.cardListItem}>
                            <Typography variant="body2" className={classes.cardListItemKey}>
                                Параметр1:
                            </Typography>
                            <Typography variant="body2" className={classes.cardListItemValue}>
                                Значение1
                            </Typography>
                        </div>
                        <div className={classes.cardListItem}>
                            <Typography variant="body2" className={classes.cardListItemKey}>
                                Параметр2:
                            </Typography>
                            <Typography variant="body2" className={classes.cardListItemValue}>
                                Значение2
                            </Typography>
                        </div>
                        <div className={classes.cardListItem}>
                            <Typography variant="body2" className={classes.cardListItemKey}>
                                Параметр3:
                            </Typography>
                            <Typography variant="body2" className={classes.cardListItemValue}>
                                Значение3
                            </Typography>
                        </div>
                        <div className={classes.cardListItem}>
                            <Typography variant="body2" className={classes.cardListItemKey}>
                                Параметр1:
                            </Typography>
                            <Typography variant="body2" className={classes.cardListItemValue}>
                                Значение1
                            </Typography>
                        </div>
                        <div className={classes.cardListItem}>
                            <Typography variant="body2" className={classes.cardListItemKey}>
                                Параметр2:
                            </Typography>
                            <Typography variant="body2" className={classes.cardListItemValue}>
                                Значение2
                            </Typography>
                        </div>
                        <div className={classes.cardListItem}>
                            <Typography variant="body2" className={classes.cardListItemKey}>
                                Параметр3:
                            </Typography>
                            <Typography variant="body2" className={classes.cardListItemValue}>
                                Значение3
                            </Typography>
                        </div>
                    </div>
                    <div className={classes.card}>
                        <div className="cardTitleBlock">
                            <Typography
                                variant="subtitle1"
                                className="cardTitle"
                            >
                                Группа 1
                            </Typography>
                        </div>
                        <div className={classes.cardListItem}>
                            <Typography variant="body2" className={classes.cardListItemKey}>
                                Параметр1:
                            </Typography>
                            <Typography variant="body2" className={classes.cardListItemValue}>
                                Значение1
                            </Typography>
                        </div>
                        <div className={classes.cardListItem}>
                            <Typography variant="body2" className={classes.cardListItemKey}>
                                Параметр2:
                            </Typography>
                            <Typography variant="body2" className={classes.cardListItemValue}>
                                Значение2
                            </Typography>
                        </div>
                        <div className={classes.cardListItem}>
                            <Typography variant="body2" className={classes.cardListItemKey}>
                                Параметр3:
                            </Typography>
                            <Typography variant="body2" className={classes.cardListItemValue}>
                                Значение3
                            </Typography>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={5}>
                    <div className={classes.card}>
                        <div className="cardTitleBlock">
                            <Typography
                                variant="subtitle1"
                                className="cardTitle"
                            >
                                Люди
                            </Typography>
                        </div>
                        <div className={classes.cardListItem}>
                            <Typography variant="body2" className={classes.cardListItemKey}>
                                Автор задачи:
                            </Typography>
                            <Typography variant="body2" className={classes.cardListItemValue}>
                                {/*{item.author}*/}
                                ФИО
                            </Typography>
                        </div>
                        <div className={classes.cardListItem}>
                            <Typography variant="body2" className={classes.cardListItemKey}>
                                Взял в работу:
                            </Typography>
                            <Typography variant="body2" className={classes.cardListItemValue}>
                                {/*{item.inProgressPerson}*/}
                                ФИО
                            </Typography>
                        </div>
                        <div className={classes.cardListItem}>
                            <Typography variant="body2" className={classes.cardListItemKey}>
                                Финализировал:
                            </Typography>
                            <Typography variant="body2" className={classes.cardListItemValue}>
                                {/*{item.finalizedPerson}*/}
                                ФИО
                            </Typography>
                        </div>
                    </div>
                    <div className={classes.card}>
                        <div className="cardTitleBlock">
                            <Typography
                                variant="subtitle1"
                                className="cardTitle"
                            >
                                Даты
                            </Typography>
                        </div>
                        <div className={classes.cardListItem}>
                            <Typography variant="body2" className={classes.cardListItemKey}>
                                Создано:
                            </Typography>
                            <Typography variant="body2" className={classes.cardListItemValue}>
                                {date_transform(job.created_at)}
                            </Typography>
                        </div>
                        <div className={classes.cardListItem}>
                            <Typography variant="body2" className={classes.cardListItemKey}>
                                Обновлено:
                            </Typography>
                            <Typography variant="body2" className={classes.cardListItemValue}>
                                {date_transform(job.modified_at)}
                            </Typography>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default JobsInfo;