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
import {dict_status, unit_type} from "../../../../../constans";

export default function TariffRow (props ){
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
                        {row.name}
                    </TableCell>
                    <TableCell component="th" scope="row">
                        {unit_type[row.unit]&&unit_type[row.unit].name}
                    </TableCell>
                    <TableCell component="th" scope="row">
                        {row.active_from}
                    </TableCell>
                    <TableCell component="th" scope="row">
                        {row.active_to}
                    </TableCell>
                    <TableCell component="th" scope="row">
                        {row.comment}
                    </TableCell>
                    <TableCell component="th" scope="row">
                        <Link to={`/region/${row.id}`}>
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

