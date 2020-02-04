import {useDispatch} from "react-redux";
import React, {useEffect} from "react";
import * as Actions from "../../store/actions";
import PageLayout from "../../../../components/pageLayout/PageLayout";

import withReducer from "../../../../store/withReducer";
import reducer from "../../store/reducers";
import DictHeader from "../../template/DictHeader";
import DictContent from "../../template/DictContent";
import DiscountRow from "./DiscountRow";
import {headerRows} from "./DiscountHeader";
import '../../styles/styles.scss';
function DiscountApp() {
    const dispatch = useDispatch()
    const rows = DiscountRow;
    dispatch(Actions.clearData());

    useEffect(() => {
        dispatch(Actions.getDiscountList());
    }, [dispatch]);

    return (
        <PageLayout
            header={<DictHeader
                title="Скидки"
                newurl="/discount/new"/>}
            content={<DictContent
                        // tablerow = "region"
                        tablerow = {rows}
                        headerrow={headerRows}
                        baseurl={"/discount"}/>}
            userContent
        />
    );
}

export default withReducer('dictsApp', reducer)(DiscountApp);