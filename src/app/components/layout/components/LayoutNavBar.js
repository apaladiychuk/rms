import React from "react";
import clsx from "clsx";
import {
    Divider,
    Drawer,
    IconButton,
    Typography
} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import LayoutNavigation from "./LayoutNavigation";

function LayoutNavBar(props) {

    return(
        <Drawer
            variant="permanent"
            classes={{
                paper: clsx(props.classes.drawerPaper, !props.open && props.classes.drawerPaperClose),
            }}
            open={props.open}
        >
            <div className={props.classes.toolbarIcon}>
                <Typography component="h1" variant="h6" color="inherit" noWrap className={props.classes.title}>
                    RMS
                </Typography>
                <IconButton onClick={props.handleDrawerClose}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider />
            <LayoutNavigation open={props.open}/>
        </Drawer>
    )
}

export default LayoutNavBar;