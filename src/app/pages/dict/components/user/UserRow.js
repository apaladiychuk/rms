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
import VpnKeyIcon from '@material-ui/icons/VpnKey';
export default function UserRow (props ){
    console.log(props);
    const { row,npp, editUrl, ...othrs}  = props;
//
    return (
                <TableRow hover key={row.id}>
                    <TableCell component="th" scope="row">
                        {npp+1}
                    </TableCell>
                    <TableCell component="th" scope="row">
                        {row.id}
                    </TableCell>
                    <TableCell component="th" scope="row">
                        {row.active}
                    </TableCell>
                    <TableCell component="th" scope="row">
                        {row.login}
                    </TableCell>
                    <TableCell component="th" scope="row">
                        {row.short_name}
                    </TableCell>
                    <TableCell component="th" scope="row">
                        {row.full_name}
                    </TableCell>
                    <TableCell component="th" scope="row">
                        {row.email}
                    </TableCell>
                    <TableCell component="th" scope="row">
                        {row.phone}
                    </TableCell>

                    <TableCell component="th" scope="row">
                        <Link to={`/user/${row.id}`}>
                            <IconButton size="small">
                                <EditIcon fontSize="inherit" />
                            </IconButton>
                        </Link>
                        <Link to={`/user/${row.id}`}>
                            <IconButton size="small">
                                <VpnKeyIcon fontSize="inherit" />
                            </IconButton>
                        </Link>
                        <IconButton size="small" className="ml-5">
                            <DeleteIcon fontSize="inherit" />
                        </IconButton>
                    </TableCell>
                </TableRow>
    )}

