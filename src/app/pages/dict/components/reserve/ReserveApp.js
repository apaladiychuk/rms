import {useDispatch} from "react-redux";
import React, {useEffect} from "react";
import * as Actions from "../../store/actions";
import PageLayout from "../../../../components/pageLayout/PageLayout";

import withReducer from "../../../../store/withReducer";
import reducer from "../../store/reducers";
import DictHeader from "../../template/DictHeader";
import DictContent from "../../template/DictContent";
import ReserveRow from "./ReserveRow";
import {headerRows} from "./ReserveHeader";
import '../../styles/styles.scss';
function ReserveApp() {
    const dispatch = useDispatch()
    const rows = ReserveRow;
    dispatch(Actions.clearData());

    useEffect(() => {
        dispatch(Actions.getReservList());
    }, [dispatch]);

    return (
        <PageLayout
            header={<DictHeader
                title="Резерв"
                newurl="/reserv/new"/>}
            content={<DictContent
                        // tablerow = "region"
                        tablerow = {rows}
                        headerrow={headerRows}
                        baseurl={"/reserv"}/>}
            userContent
        />
    );
}

export default withReducer('dictsApp', reducer)(ReserveApp);