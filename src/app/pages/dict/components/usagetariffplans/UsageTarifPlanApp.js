import {useDispatch} from "react-redux";
import React, {useEffect} from "react";
import * as Actions from "../../store/actions";
import PageLayout from "../../../../components/pageLayout/PageLayout";

import withReducer from "../../../../store/withReducer";
import reducer from "../../store/reducers";
import DictHeader from "../../template/DictHeader";
import DictContent from "../../template/DictContent";
import UsageTarifPlanRow from "./UsageTarifPlanRow";
import {headerRows} from "./UsageTarifPlanHeader";
import '../../styles/styles.scss';
function UsageTarifPlanApp() {
    const dispatch = useDispatch()
    const regionRow = UsageTarifPlanRow;
    dispatch(Actions.clearData());

    useEffect(() => {
        dispatch(Actions.getUsageTarifPlanList());
    }, [dispatch]);

    return (
        <PageLayout
            header={<DictHeader
                title="Плата за использование"
                newurl="/usage_tariff_plan/new"/>}
            content={<DictContent
                        // tablerow = "region"
                        tablerow = {regionRow}
                        headerrow={headerRows}
                        baseurl={"/usage_tariff_plan"}/>}
            userContent
        />
    );
}

export default withReducer('dictsApp', reducer)(UsageTarifPlanApp);