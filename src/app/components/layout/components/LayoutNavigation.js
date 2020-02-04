import React from "react";
import {withRouter} from "react-router-dom";
import history from '../../../../@history';
import navigation from "../../../configs/navigation";
import {Divider, Icon, List, ListItem, ListItemText, ListSubheader} from "@material-ui/core";
import {makeStyles} from '@material-ui/styles';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
    list: {
        overflowY: 'auto',
        overflowX: 'hidden'
    },
    item: {
        height: 40,
        width: 'calc(100% - 16px)',
        borderRadius: '0 20px 20px 0',
        paddingRight: 12,
        '&.active': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.secondary.contrastText + '!important',
            pointerEvents: 'none',
            transition: 'border-radius .15s cubic-bezier(0.4,0.0,0.2,1)',
            '& .list-item-text-primary': {
                color: 'inherit'
            },
            '& .list-item-icon': {
                color: 'inherit'
            }
        },
        color: theme.palette.text.primary,
        textDecoration: 'none!important'
    },
    activeText: {
        opacity: 0
    },
    listSubheader: {
        height: 48,
        display: 'flex',
        alignItems: 'center',
        textTransform: 'uppercase'
    }
}));

function LayoutNavigation(props) {

    const classes = useStyles(props);

    return (
        <List className={classes.list}>
            {
                navigation.map(({children, title, id}) => (
                    <div key={id}>
                        <ListSubheader
                            disableSticky={true}
                            className={classes.listSubheader}
                        >
                            {props.open ? title : <Icon color="primary">keyboard_arrow_down</Icon>}
                        </ListSubheader>
                        {
                            children.map(({url, icon, title, id}) => {
                                const active = url === props.location.pathname;

                                return (
                                    <ListItem
                                        button
                                        onClick={() => history.push(url)}
                                        className={clsx(classes.item, 'list-item', active && "active")}
                                        key={id}
                                    >
                                        <Icon color={active ? 'inherit' : 'primary'} className="mr-15">{icon}</Icon>
                                        <ListItemText
                                            primary={title}
                                            className={clsx(!props.open && classes.activeText, 'transition')}
                                        />
                                    </ListItem>
                                )
                            })
                        }
                        <Divider/>
                    </div>
                ))
            }
        </List>
    )
}

export default withRouter(LayoutNavigation);