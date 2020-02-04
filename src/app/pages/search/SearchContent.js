import React from 'react';
import PropTypes from 'prop-types';
import {
    AppBar,
    Tabs,
    Tab,
} from '@material-ui/core';
import SearchNumber from './SearchNumberPanel'
import SearchTaskPanel from './SearchTaskPanel'
import SearchOrderPanel from './SearchOrderPanel'
import './styles/search.scss';

export default function SearchContent() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className="search">
            <AppBar position="static" color="default" elevation={0}>
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Номер" {...a11yProps(0)} />
                    <Tab label="Заявка" {...a11yProps(1)} />
                    <Tab label="Задание" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <div className="pt-25">
                    <SearchNumber/>
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <div className="pt-25">
                    <SearchOrderPanel />
                </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <div className="pt-25">
                    <SearchTaskPanel />
                </div>
            </TabPanel>
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div>
            {value === index && children}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};