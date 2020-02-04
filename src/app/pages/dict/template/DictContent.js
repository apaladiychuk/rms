import React from 'react';
import {useSelector} from 'react-redux';
import { Typography } from "@material-ui/core";
import ResultTable from "./ResultTable";

function DictContent(props) {
    const list = useSelector(({dictsApp}) => dictsApp.dict.list);
    const {baseurl,headerrow,tablerow , ...others }  = props ;
    return (
        <div className="dict__content">
            {
                Boolean(list.length) ? (
                    <ResultTable
                        tablerow={tablerow}
                        headerrow={headerrow}
                        list={list}
                        baseurl={baseurl}
                    />
                ) : (
                    <div className="flex items-center justify-center h-300">
                        <Typography color="textSecondary" variant="h5">
                            Данные отсутствуют!
                        </Typography>
                    </div>
                )
            }
        </div>
    );
}

export default DictContent;