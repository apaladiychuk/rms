import {useDispatch} from "react-redux";
import React, {useEffect} from "react";
import * as Actions from "../../store/actions";
import PageLayout from "../../../../components/pageLayout/PageLayout";

import withReducer from "../../../../store/withReducer";
import reducer from "../../store/reducers";
import DictHeader from "../../template/DictHeader";
import DictContent from "../../template/DictContent";
import RegionRow from "./RegionRow";
import {headerRows} from "./RegionHeader";

import '../../styles/styles.scss';

function RegionApp() {
    const dispatch = useDispatch()
    const regionRow = RegionRow;
    dispatch(Actions.clearData());

    useEffect(() => {
        dispatch(Actions.getRegionList());
    }, [dispatch]);

    return (
        <PageLayout
            header={<DictHeader
                title="Регионы"
                newurl="/region/new"/>}
            content={<DictContent
                        // tablerow = "region"
                        tablerow = {regionRow}
                        headerrow={headerRows}
                        baseurl={"/region"}/>}
            userContent
        />
    );
}

export default withReducer('dictsApp', reducer)(RegionApp);