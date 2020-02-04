import React from 'react';
import {
    TableHead,
    TableSortLabel,
    TableCell,
    TableRow,
    Icon
} from '@material-ui/core';

const rows = [
    {
        id: 'id',
        align: 'left',
        disablePadding: false,
        label: 'ID',
        sort: true,
        style: { width: 80 }
    },
    {
        id: 'data',
        align: 'left',
        disablePadding: false,
        label: 'Дата',
        sort: true,
        style: { minWidth: 200 }
    },
    {
        id: 'login',
        align: 'left',
        disablePadding: false,
        label: 'Логин',
        sort: true,
        style: { minWidth: 150 }
    },
    {
        id: 'action',
        align: 'left',
        disablePadding: false,
        label: 'Действие',
        sort: true,
        style: { width: '100%' }
    },
    {
        id: 'type',
        align: 'left',
        disablePadding: false,
        label: 'Тип',
        sort: true,
        style: { minWidth: 100 }
    },
    {
        id: 'client_ip',
        align: 'left',
        disablePadding: false,
        label: 'IP',
        sort: true,
        style: { minWidth: 150 }
    },
];

function AuditTableHead(props) {
    const createSortHandler = property => event => {
        props.onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow className="h-64">
                {rows.map(row => {
                    return (
                        <TableCell
                            key={row.id}
                            align={row.align}
                            padding={row.disablePadding ? 'none' : 'default'}
                            sortDirection={props.order.id === row.id ? props.order.direction : false}
                            style={row.style}
                        >
                            {
                                row.icon && (
                                    <Icon fontSize="small" style={{ lineHeight: 'unset' }}>{row.icon}</Icon>
                                )
                            }
                            {row.sort && (
                                <TableSortLabel
                                    active={props.order.id === row.id}
                                    direction={props.order.direction}
                                    onClick={createSortHandler(row.id)}
                                >
                                    {row.label}
                                </TableSortLabel>
                            )}
                        </TableCell>
                    );
                }, this)}
            </TableRow>
        </TableHead>
    );
}

export default AuditTableHead;
