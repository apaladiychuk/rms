import {useDispatch} from "react-redux";
import React, {useEffect} from "react";
import * as Actions from "../../store/actions";
import PageLayout from "../../../../components/pageLayout/PageLayout";

import withReducer from "../../../../store/withReducer";
import reducer from "../../store/reducers";
import DictHeader from "../../template/DictHeader";
import DictContent from "../../template/DictContent";
import TariffRow from "./TariffRow";
import {headerRows} from "./TariffHeader";
import '../../styles/styles.scss';

function TariffApp() {
    const dispatch = useDispatch()
    const rows = TariffRow;
    dispatch(Actions.clearData());

    useEffect(() => {
        dispatch(Actions.getTarifList());
    }, [dispatch]);

    return (
        <PageLayout
            header={<DictHeader
                title="Тарифные сетки"
                newurl="/tariff/new"/>}
            content={<DictContent
                        // tablerow = "region"
                        tablerow = {rows}
                        headerrow={headerRows}
                        baseurl={"/tariff"}/>}
            userContent
        />
    );
}

export default withReducer('dictsApp', reducer)(TariffApp);