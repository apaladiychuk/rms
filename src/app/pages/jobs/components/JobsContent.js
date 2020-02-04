import React, { useState, useEffect } from 'react';
import JobsList from "./jobsList/JobsList";
import JobsInfo from "./jobsInfo/JobsInfo";
import * as Actios from '../store/actions';
import {useDispatch} from "react-redux";

function JobsContent({ list }) {

    const dispatch = useDispatch();

    const [active_job_id, setActive_job_id] = useState(list.active_jobs[0]);

    useEffect(() => {
        dispatch(Actios.setJobActive(active_job_id));
    }, [dispatch, active_job_id]);

    const handleListItemClick = (id) => {
        setActive_job_id(id);
    };

    if (!list.active_jobs.length) return null;

    return (
        <div className="jobs">
            <div className="jobs__list">
                <JobsList
                    active_job_id={active_job_id}
                    handleListItemClick={handleListItemClick}
                    list={list}
                />
            </div>
            <div className="jobs__info">
                <JobsInfo
                    job={list.jobs_idx[active_job_id]}
                    task={list.tasks_idx[list.jobs_idx[active_job_id].task_id]}
                />
            </div>
        </div>
    );
}

export default JobsContent;