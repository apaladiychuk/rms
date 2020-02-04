import React from 'react';
import TextField  from '@material-ui/core/TextField';
import {useDispatch, useSelector} from "react-redux";
import * as Actions from "../store/actions";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import Button from "@material-ui/core/Button";
import {HIDE} from "../const";

function NumericRangeInput(props) {
    const { description ,hidden,  ...other } = props;
    const dispatch = useDispatch();
    const list = useSelector(({searchApp}) => searchApp.search.list);

    const initVal = {from :null, till:null};
    if ( list[description.id] !== undefined ){
        initVal.from = list[description.id].from;
        initVal.till = list[description.id].till;
    }
    // The first commit of Material-UI
    const [numericRange, setNumericRange] = React.useState(initVal);

    const onChangeFrom = (v)=>{
        const nv = numericRange;
        nv.from = v.target.value;
        setNumericRange(nv);
        dispatch(Actions.addSearchParam({id:description.id, value: nv }));
    };
    const onChangeTill = (v)=>{
        const nv = numericRange;
        nv.till = v.target.value;
        setNumericRange(nv);
        dispatch(Actions.addSearchParam({id:description.id, value: nv }));
    };
    const handleHideParam = ()=>{
        dispatch(Actions.delSearchParam(description.id));
        dispatch(Actions.displayParameter(description.id,HIDE))
    };


    return (
        <div hidden = {hidden}>
        <TextField  className= "search__param"
                    variant="outlined"
                    label={description.title + ' с'}
                    id="outlined-basic"
                    onChange={onChangeFrom}/>

        <TextField  className= "search__param"
            variant="outlined"
            label={"по"}
            id="outlined-basic"
            onChange={onChangeTill}/>
            <Button
                className="ml-a"
                color="inherit"
                variant="outlined"
                startIcon={<HighlightOffIcon/>}
                onClick={handleHideParam}/>
        </div>
    )
}


export default NumericRangeInput;
