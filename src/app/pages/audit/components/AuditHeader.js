import React from 'react';
import {Icon, Typography} from "@material-ui/core";

function AuditHeader() {

    return (
        <div className="flex items-center w-full">
            <Icon className="mr-15">crop_landscape</Icon>
            <Typography component="h1" noWrap variant="h5">Аудит действий</Typography>
        </div>
    );
}

export default AuditHeader;