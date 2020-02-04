import {useDispatch} from "react-redux";
import React, {useEffect} from "react";
import * as Actions from "../../store/actions";
import PageLayout from "../../../../components/pageLayout/PageLayout";

import withReducer from "../../../../store/withReducer";
import reducer from "../../store/reducers";
import DictHeader from "../../template/DictHeader";
import DictContent from "../../template/DictContent";
import NumberCatRow from "./NumberCatRow";
import {headerRows} from "./NumberCatHeader";
import '../../styles/styles.scss';
function NumberCatApp() {
    const dispatch = useDispatch()
    const tableRow = NumberCatRow;
    dispatch(Actions.clearData());

    useEffect(() => {
        dispatch(Actions.getNumberCategoriesList());
    }, [dispatch]);

    return (
        <PageLayout
            header={<DictHeader
                title="Категирии номеров"
                newurl="/number_category/new"/>}
            content={<DictContent
                        // tablerow = "region"
                        tablerow = {tableRow}
                        headerrow={headerRows}
                        baseurl={"/number_category"}/>}
            userContent
        />
    );
}

export default withReducer('dictsApp', reducer)(NumberCatApp);