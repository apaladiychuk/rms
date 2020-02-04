import React from 'react';
import {Button, ButtonGroup} from "@material-ui/core";
import JobsInfoTitle from "./JobsInfoTitle";
import {useSelector, useDispatch} from "react-redux";
import * as Actios from '../../store/actions';

function JobsInfoHeader(props) {

    const dispatch = useDispatch();

    const active_job_id = useSelector(({ jobsApp }) => jobsApp.jobs.active_job_id);

    return (
        <div>
            <JobsInfoTitle
                jobId={props.jobId}
                taskId={props.taskId}
                orderId={props.orderId}
            />
            <ButtonGroup color="primary" size="small" className="mt-16">
                <Button>К выполнению</Button>
                <Button
                    onClick={() => {
                        dispatch(Actios.changeStatus({
                            id: active_job_id,
                            status: 'P'
                        }))
                    }}
                >
                    В процессе
                </Button>
                <Button
                    onClick={() => {
                        dispatch(Actios.changeStatus({
                            id: active_job_id,
                            status: 'R'
                        }))
                    }}
                >
                    Готово
                </Button>
                <Button>Отмена</Button>
            </ButtonGroup>
        </div>
    )
}

export default JobsInfoHeader;