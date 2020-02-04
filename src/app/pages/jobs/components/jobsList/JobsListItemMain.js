import React from 'react';
import {
    Typography,
    Tooltip,
    Icon
} from '@material-ui/core';
import { job_status, job_operation } from "../../../../../constans";

function JobsListItemMain({ status, resource_type, operation }) {

    return (
        <div className="flex items-center">
            {
                Boolean(job_status[status]) && (
                    <Typography variant="caption">
                        <i
                            className="statusIcon mr-5"
                            style={{ backgroundColor: job_status[status].color }}
                        />
                        {job_status[status].name}
                    </Typography>
                )
            }
            <Typography variant="caption" className="ml-a mr-5">
                {resource_type}
            </Typography>
            {
                job_operation[operation] && (
                    <Tooltip
                        title={job_operation[operation].name}
                        placement="top"
                    >
                        <Icon
                            style={{ color: job_operation[operation].color }}
                            fontSize="small"
                        >
                            {job_operation[operation].icon}
                        </Icon>
                    </Tooltip>
                )
            }
        </div>
    );
}

export default JobsListItemMain;