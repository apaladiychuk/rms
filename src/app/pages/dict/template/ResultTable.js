import React, {useState, useEffect} from 'react';
import {
    Table,
    TableBody,
    TableRow,
    TablePagination,
    TableContainer,
    Paper
} from '@material-ui/core';
import TableHeader from "./TableHeader";
import orderBy from 'lodash/orderBy';

function ResultTable(props) {
    //const tag = props.tablerow ;
    const TableRow = props.tablerow ;
    const baseurl = props.baseurl;
    const headerRows = props.headerrow;

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
                                    <TableRow
                                        // tag={tag}
                                        npp={i}
                                        row={row}
                                        editurl={`/{baseurl}}/${row.id}`}
                                    ></TableRow>
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

export default ResultTable;