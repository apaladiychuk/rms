import React from 'react';
import { useSelector } from 'react-redux';
import { Typography } from "@material-ui/core";
import AuditTable from "./table/AuditTable";

function AuditContent() {
    const list = useSelector(({auditApp}) => auditApp.audit.list);

    return (
        <div className="order__content">
            {
                Boolean(list.length) ? (
                    <AuditTable
                        list={list}
                    />
                ) : (
                    <div className="flex items-center justify-center h-300">
                        <Typography color="textSecondary" variant="h5">
                            There are no audit!
                        </Typography>
                    </div>
                )
            }
        </div>
    );
}

export default AuditContent;