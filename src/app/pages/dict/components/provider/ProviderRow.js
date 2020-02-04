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
import {dict_status} from "../../../../../constans";

export default function RegionRow (props ) {
    console.log(props);
    const {row, npp, editUrl, ...othrs} = props;
//
    return (
        <TableRow hover key={row.id}>
            <TableCell component="th" scope="row">
                {npp + 1}
            </TableCell>
            <TableCell component="th" scope="row">
                {row.id}
            </TableCell>
            <TableCell component="th" scope="row">
                <HighlightedText
                    text={dict_status[row.status] && dict_status[row.status].name}
                    bg={dict_status[row.status] && dict_status[row.status].color}
                />
            </TableCell>
            <TableCell component="th" scope="row">
                {row.name}
            </TableCell>
            <TableCell component="th" scope="row">
                {row.bin_nr}
            </TableCell>
            <TableCell component="th" scope="row">
                <Link to={`/provider/${row.id}`}>
                    <IconButton size="small">
                        <EditIcon fontSize="inherit"/>
                    </IconButton>
                </Link>
                <IconButton size="small" className="ml-5">
                    <DeleteIcon fontSize="inherit"/>
                </IconButton>
            </TableCell>
        </TableRow>
    );
}