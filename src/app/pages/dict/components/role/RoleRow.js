import React from "react";
import {
    TableRow,
    TableCell,
    IconButton
} from "@material-ui/core";
import HighlightedText from "../../../../components/HighlightedText";
import {Link} from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

export default function RoleRow (props ){
    console.log(props);
    const { row,npp, editUrl, ...othrs}  = props;
//
    return (
                <TableRow hover key={row.id}>
                    <TableCell component="th" scope="row">
                        {npp+1}
                    </TableCell>
                    <TableCell component="th" scope="row">
                        {row.role_cd}
                    </TableCell>
                    <TableCell component="th" scope="row">
                        {row.role_name}
                    </TableCell>
                    <TableCell component="th" scope="row">
                        {row.description}
                    </TableCell>
                </TableRow>
    )}

