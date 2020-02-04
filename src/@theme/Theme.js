import React from "react";
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

function Theme(props) {

    return (
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    )
}

export default Theme;