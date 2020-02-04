import React from 'react';
import {
    Icon, IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@material-ui/core';
import ResourceType from "./ResourceType";
import HighlightedText from "../../../../../components/HighlightedText";
import { date_transform, task_operation } from "../../../../../../constans";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

function ResourceInfo({ name, tasks, provider, isNewProvider, type }) {

    return (
        <div className="flex my-15">
            <div className="w-130 flex-shrink-0">
                <ResourceType
                    type={type}
                    name={name}
                    provider={provider}
                    isNewProvider={isNewProvider}
                />
            </div>
            <div className="w-full ml-15">
                {
                    Boolean(tasks.length) ? (
                        <TableContainer>
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell style={{ width: 150 }}>Операция</TableCell>
                                        <TableCell style={{ width: 150 }}>Период</TableCell>
                                        <TableCell style={{ width: 150 }}>Ресурс</TableCell>
                                        <TableCell>Описание</TableCell>
                                        <TableCell style={{ width: 150 }}>
                                            <Icon fontSize="small" style={{ lineHeight: 'unset' }}>
                                                settings
                                            </Icon>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        tasks.map((task) => (
                                            <TableRow key={task.id}>
                                                <TableCell component="th">
                                                    <HighlightedText
                                                        text={task_operation[task.task_type].name}
                                                        bg={task_operation[task.task_type].color}
                                                    />
                                                </TableCell>
                                                <TableCell component="th">
                                                    {date_transform(task.active_from) || '-'}
                                                </TableCell>
                                                <TableCell component="th">{task.value}</TableCell>
                                                <TableCell component="th">{task.comment}</TableCell>
                                                <TableCell component="th">
                                                    <IconButton size="small">
                                                        <EditIcon fontSize="small" />
                                                    </IconButton>
                                                    <IconButton size="small" className="ml-5">
                                                        <DeleteIcon fontSize="small" />
                                                    </IconButton>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    ) : (
                        <div className="w-full border-dashed h-full" />
                    )
                }
            </div>
        </div>
    );
}

export default ResourceInfo;