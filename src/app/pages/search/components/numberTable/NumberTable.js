import React, {useEffect, useState} from "react";
import {
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TablePagination,
    TableRow
} from "@material-ui/core";
import TableHeader from "./TableHeader";
import orderBy from 'lodash/orderBy';
import {date_transform, job_status} from "../../../../../constans";
import HighlightedText from "../../../../components/HighlightedText";
import DeleteIcon from "@material-ui/icons/Delete";
import {headerRows} from './NumberHeaderData';

function NumbersTable(props) {
    const [data, setData] = useState(props.list);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(25);
    const [order,setOrder] = useState({
        direction: 'asc',
        id: null
    });
    useEffect(() => {
        setData(props.list)
    }, [props.list]);

    function handleRequestSort(event, property) {
        const id = property;
        let direction = 'desc';
        if (order.id === property && order.direction === 'desc') {
            direction = 'asc';
        }
        setOrder({ direction, id });
    }

    function handleChangePage(event, page) {
        setPage(page);
    }

    function handleChangeRowsPerPage(event) {
        setRowsPerPage(event.target.value);
    }

    return (
        <div className="order__content mt-25">
            {
                Boolean(data.length) && (
                    <TableContainer component={Paper}>
                        <Table size="small" aria-label="a dense table">
                            <TableHeader
                                order={order}
                                onRequestSort={handleRequestSort}
                                rowCount={data.length}
                                rows={headerRows}
                            />
                            <TableBody>
                                {
                                    orderBy(data, [
                                        (o) => o[order.id]
                                    ], [order.direction])
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((row, i) => (
                                            <TableRow hover key={row.id}>
                                                <TableCell component="th" scope="row">
                                                    {row.resource_type}
                                                </TableCell>
                                                <TableCell component="th" scope="row">
                                                    {row.value}
                                                </TableCell>
                                                {/*<TableCell component="th" scope="row">*/}
                                                {/*</TableCell>*/}
                                                {/*<TableCell component="th" scope="row">*/}
                                                {/*</TableCell>*/}
                                                {/*<TableCell component="th" scope="row">*/}
                                                {/*</TableCell>*/}
                                                {/*<TableCell component="th" scope="row">*/}
                                                {/*</TableCell>*/}
                                            </TableRow>
                                        ))
                                }
                            </TableBody>
                        </Table>
                        <TablePagination
                            component="div"
                            count={data.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            backIconButtonProps={{
                                'aria-label': 'Previous Page'
                            }}
                            nextIconButtonProps={{
                                'aria-label': 'Next Page'
                            }}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                        />
                    </TableContainer>
                )
            }
        </div>
    );
}

export default NumbersTable;