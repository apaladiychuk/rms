import React from 'react';
import Button from '@material-ui/core/Button'
import {HIDE, NumberParamType} from './const';
import * as Actions from './store/actions'
import { Grid } from '@material-ui/core';
import ResourceTypeSelect from "./components/SearchResourceType";
import SearchDateRangePicker from "./components/SearchDateRangePicker";
import NumbersTable from "./components/numberTable/NumberTable";
import NumberInput from './components/SearchNumberInput';
import {useDispatch, useSelector} from "react-redux";
import SearchIcon from "@material-ui/icons/Search";
import NumericRangeInput from "./components/SearchNumericRange";

function SearchNumber() {
    const dispatch = useDispatch();

    const list = useSelector(({searchApp}) => searchApp.search.result);
    const paramList = useSelector(({searchApp}) => searchApp.search.paramList);

    const requestData = () => {
        dispatch(Actions.getNumberResult());
    };

    return (
        <Grid>
            <Grid
                container
                spacing={3}
                justify="start"
                alignItems="start"
                direction="row"
            >
                <Grid item xs={3}>
                    <NumberInput description={NumberParamType.number}/>
                </Grid>
                <Grid item xs={3}>
                    <ResourceTypeSelect
                        className="search__param"
                        description={NumberParamType.resourceType}
                    />
                </Grid>
                <Grid item xs={12}>
                    {/*<SearchDatePicker className="search__param"*/}
                    {/*    description = {NumberParamType.activeDate} ></SearchDatePicker>*/}
                    {/*      </Grid>*/}

                    {/*          <Grid>*/}
                    {/*              <ParameterList/>*/}
                    {/*          </Grid>*/}
                    {/*      <Grid   >*/}
                    <Button
                        className="ml-a"
                        color="inherit"
                        variant="outlined"
                        startIcon={<SearchIcon/>}
                        onClick={requestData}>Поиск</Button>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={3}>
                    <SearchDateRangePicker
                        hidden={paramList.dateFrom.visible === HIDE}
                        description={NumberParamType.dateFrom}/>
                </Grid>
                <Grid item xs={3}>
                    <SearchDateRangePicker
                        hidden={paramList.dateTill.visible === HIDE}
                        description={NumberParamType.dateTill}/>
                </Grid>
                <Grid item xs={3}>
                    <NumericRangeInput
                        hidden={paramList.oncePay.visible === HIDE}
                        description={NumberParamType.oncePay}/>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={3}>
                    <NumericRangeInput
                        hidden={paramList.fee.visible === HIDE}
                        description={NumberParamType.fee}/>
                </Grid>
                <Grid item xs={3}>
                    <NumericRangeInput
                        hidden={paramList.discount.visible === HIDE}
                        description={NumberParamType.discount}/>
                </Grid>
                <Grid item xs={3}>
                    <NumericRangeInput
                        hidden={paramList.minReward.visible === HIDE}
                        description={NumberParamType.minReward}/>
                </Grid>
            </Grid>
            <Grid>
                <NumbersTable list={list}/>
            </Grid>
        </Grid>
    );
}

export default SearchNumber;