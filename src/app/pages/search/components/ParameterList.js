import Input from "@material-ui/core/Input";
import Checkbox from "@material-ui/core/Checkbox";
import Select from "@material-ui/core/Select";
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';

import React from "react";
import {useSelector} from "react-redux";
import {ALL,HIDE,VISIBLE} from '../const';

function ParameterList(props){
    const params = useSelector(({searchApp}) => searchApp.search.paramList);
    const paramsArr = [];
    const handleChange = event => {

    };
    for (const  p in params){
        if ( params[p].visible !== ALL ){
            paramsArr.push(params[p]);
        }
    }
    const [paramState, setParam] = React.useState([]);
    return ( <Select
        labelId="demo-mutiple-checkbox-label"
        id="demo-mutiple-checkbox"
        multiple
        value = {paramState}
        onChange={handleChange}
        input={<Input />}
        MenuProps={MenuProps}
    >
        {paramsArr.map(row => (
            <MenuItem key={row.id} value={row}>
                <Checkbox checked={row.visible === VISIBLE } />
                <ListItemText primary={row.title} />
            </MenuItem>
        ))}
    </Select>)
}
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

export default ParameterList;
