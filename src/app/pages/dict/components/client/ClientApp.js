import {useDispatch} from "react-redux";
import React, {useEffect} from "react";
import * as Actions from "../../store/actions";
import PageLayout from "../../../../components/pageLayout/PageLayout";

import withReducer from "../../../../store/withReducer";
import reducer from "../../store/reducers";
import DictHeader from "../../template/DictHeader";
import DictContent from "../../template/DictContent";
import ClientRow from "./ClientRow";
import {headerRows} from "./ClientHeader";
import '../../styles/styles.scss';
function ClientApp() {
    const dispatch = useDispatch()
    const rows = ClientRow;
    dispatch(Actions.clearData());

    useEffect(() => {
        dispatch(Actions.getClientsList());
    }, [dispatch]);

    return (
        <PageLayout
            header={<DictHeader
                title="Конечные клиенты"
                newurl="/client/new"/>}
            content={<DictContent
                        // tablerow = "region"
                        tablerow = {rows}
                        headerrow={headerRows}
                        baseurl={"/client"}/>}
            userContent
        />
    );
}

export default withReducer('dictsApp', reducer)(ClientApp);