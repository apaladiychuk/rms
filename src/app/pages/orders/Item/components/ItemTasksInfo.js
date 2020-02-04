import React from 'react';
import {
    Typography,
    Grid,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    TableContainer,
} from "@material-ui/core";
import {useSelector} from "react-redux";
import HighlightedText from "../../../../components/HighlightedText";
import {date_transform, order_status, task_operation} from "../../../../../constans";

const tasks_info = [
    {
        status: 'R',
        title: 'Tasks Ready'
    },
    {
        status: ['W', 'I'],
        title: 'Tasks In Progress'
    },
    {
        status: 'P',
        title: 'Tasks Ready for execution'
    },
    {
        status: 'E',
        title: 'Tasks Error'
    },
];

const ItemTasksInfo = () => {
    const tasks = useSelector(({ordersItemApp}) => ordersItemApp.orderItem.tasks);

    return (
        <Grid item xs={12}>
            <Grid container spacing={3}>
                {
                    tasks_info.map((item) => {
                        const tasks_for_status = tasks.filter(({ status }) => item.status.includes(status));

                        if (!tasks_for_status.length) {
                            return null;
                        }

                        return (
                            <Grid item xs={12} key={item.status} className="mt-25">
                                <div className="cardTitleBlock mb-15">
                                    <Typography variant="body1" className="font-normal cardTitle">
                                        <i
                                            className="statusIcon statusIcon--large mr-10"
                                            style={{backgroundColor: order_status[item.status[0]].color}}
                                        />
                                        {item.title} ({tasks_for_status.length})
                                    </Typography>
                                </div>

                                <TableContainer>
                                    <Table size="small">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell style={{ width: 100, border: 'none' }}>ID</TableCell>
                                                <TableCell style={{ width: 150, border: 'none' }}>Операция</TableCell>
                                                <TableCell style={{ width: 150, border: 'none' }}>Тип ресурса</TableCell>
                                                <TableCell style={{ width: 150, border: 'none' }}>Период</TableCell>
                                                <TableCell style={{ width: 150, border: 'none' }}>Ресурс</TableCell>
                                                <TableCell style={{ width: 200, border: 'none' }}>Провайдер</TableCell>
                                                <TableCell style={{ border: 'none' }}>Описание</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {
                                                tasks_for_status.map((task) => (
                                                    <TableRow key={task.id}>
                                                        <TableCell component="th" style={{ border: 'none' }}>{task.id}</TableCell>
                                                        <TableCell component="th" style={{ border: 'none' }}>
                                                            <HighlightedText
                                                                text={task_operation[task.task_type].name}
                                                                bg={task_operation[task.task_type].color}
                                                            />
                                                        </TableCell>
                                                        <TableCell component="th" style={{ border: 'none' }}>{task.resource_type}</TableCell>
                                                        <TableCell component="th" style={{ border: 'none' }}>
                                                            {date_transform(task.active_from) || '-'}
                                                        </TableCell>
                                                        <TableCell component="th" style={{ border: 'none' }}>{task.value}</TableCell>
                                                        <TableCell component="th" style={{ border: 'none' }}>{task.provider_name}</TableCell>
                                                        <TableCell component="th" style={{ border: 'none' }}>{task.comment}</TableCell>
                                                    </TableRow>
                                                ))
                                            }
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Grid>
    )
};

export default ItemTasksInfo;