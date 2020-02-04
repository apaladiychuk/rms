import React from 'react';
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    highlightedText: {
        padding: '3px 5px',
        fontSize: 12,
        borderRadius: 3
    },
}));

function HighlightedText({ variant = 'body2', text, bg = '#800080', color = '#fff' }) {

    const classes = useStyles();

    return (
        <Typography
            component="span"
            noWrap
            variant={variant}
            className={classes.highlightedText}
            style={{
                backgroundColor: bg,
                color
            }}
        >
            {text}
        </Typography>
    );
}

export default HighlightedText;