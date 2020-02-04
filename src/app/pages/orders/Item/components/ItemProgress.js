import React from 'react';
import { LinearProgress } from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import {order_status} from "../../../../../constans";

const useStyles = makeStyles({
    root: {
        height: 10,
        backgroundColor: '#e6e6e6',
        borderRadius: 20,
    },
    bar: props => ({
        borderRadius: 20,
        backgroundColor: props.backgroundColor,
    }),
});

function ItemProgress({ columnCount, status }) {

    const classes = useStyles({backgroundColor: order_status[status].color});

    const calcProgress = () => {
        const columnWidth = (100 / columnCount);
        const statusProgress = order_status[status].progress;

        if (statusProgress === columnCount) return 100;

        return ((columnWidth * statusProgress) - (columnWidth / 2));
    };

    return (
        <LinearProgress
            variant="determinate"
            value={calcProgress()}
            classes={{
                root: classes.root,
                bar: classes.bar
            }}
        />
    );
}

export default ItemProgress;