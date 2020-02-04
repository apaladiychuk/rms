import React from 'react';
import TaskContentAlpha from "./forms/Add/TaskContentAlpha";
import TaskContentIvr from "./forms/Add/TaskContentIvr";
import TaskContentDel from "./forms/Del/TaskContentDel";
import TaskContentHnd from "./forms/Hnd/TaskContentHnd";
import {useSelector} from "react-redux";

function TaskContent() {
    const locState = useSelector(({taskApp}) => taskApp.task.info.locState);

    return (
        <div className="task w-full">
            {
                locState.operation === 'ADD' && (
                    <>
                        { locState.type === 'ALPHA' && <TaskContentAlpha /> }
                        { locState.type === 'IVR' && <TaskContentIvr /> }
                    </>
                )
            }
            {
                locState.operation === 'DEL' && (
                    <>
                        <TaskContentDel />
                    </>
                )
            }
            {
                locState.operation === 'HND' && (
                    <>
                        <TaskContentHnd />
                    </>
                )
            }
        </div>
    );
}

export default TaskContent;