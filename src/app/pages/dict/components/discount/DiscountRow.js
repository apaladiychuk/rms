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

export default function DiscountRow (props ){
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
                        {row.discount_cd}
                    </TableCell>
                    <TableCell component="th" scope="row">
                        {row.description}
                    </TableCell>
                    <TableCell component="th" scope="row">
                        {row.comment}
                    </TableCell>
                    <TableCell component="th" scope="row">
                        {row.active_from}
                    </TableCell>
                    <TableCell component="th" scope="row">
                        {row.active_to}
                    </TableCell>
                    <TableCell component="th" scope="row">
                        <Link to={`/discount/${row.id}`}>
                            <IconButton size="small">
                                <EditIcon fontSize="inherit" />
                            </IconButton>
                        </Link>
                        <IconButton size="small" className="ml-5">
                            <DeleteIcon fontSize="inherit" />
                        </IconButton>
                    </TableCell>
                </TableRow>
    )}

