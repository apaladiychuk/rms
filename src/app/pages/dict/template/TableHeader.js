import {Icon, TableCell, TableHead, TableRow, TableSortLabel} from "@material-ui/core";
import React from "react";

function TableHeader(props) {
    const createSortHandler = property => event => {
        props.onRequestSort(event, property);
    };
    const rows = props.rows ;

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

export default TableHeader;
