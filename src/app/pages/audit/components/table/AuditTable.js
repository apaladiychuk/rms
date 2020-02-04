import React, {useState, useEffect} from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableRow,
    TablePagination,
    TableContainer,
    Paper
} from '@material-ui/core';
import AuditTableHead from "./AuditTableHead";
import orderBy from 'lodash/orderBy';
import {log_type} from "../../../../../constans";
import HighlightedText from "../../../../components/HighlightedText";

function AuditTable(props) {
    const [data, setData] = useState(props.list);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(25);
    const [order, setOrder] = useState({
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
        <div className="order__content">
            <TableContainer component={Paper}>
                <Table size="small">
                    <AuditTableHead
                        order={order}
                        onRequestSort={handleRequestSort}
                        rowCount={data.length}
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
                                            {row.id}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {row.timestamp}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {row.login}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {row.message}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            <HighlightedText
                                                text={row.level}
                                                bg={log_type[row.level].color}
                                            />
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {row.client_ip}
                                        </TableCell>
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
        </div>
    );
}

export default AuditTable;