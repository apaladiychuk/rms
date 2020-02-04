import {useDispatch} from "react-redux";
import React, {useEffect} from "react";
import * as Actions from "../../store/actions";
import PageLayout from "../../../../components/pageLayout/PageLayout";

import withReducer from "../../../../store/withReducer";
import reducer from "../../store/reducers";
import DictHeader from "../../template/DictHeader";
import DictContent from "../../template/DictContent";
import RoleRow from "./RoleRow";
import {headerRows} from "./RoleHeader";
import '../../styles/styles.scss';
function RoleApp() {
    const dispatch = useDispatch()
    const rows = RoleRow;
    dispatch(Actions.clearData());

    useEffect(() => {
        dispatch(Actions.getRoleList());
    }, [dispatch]);

    return (
        <PageLayout
            header={<DictHeader
                title="Роли"
                newurl="/role/new"/>}
            content={<DictContent
                        // tablerow = "region"
                        tablerow = {rows}
                        headerrow={headerRows}
                        baseurl={"/role"}/>}
            userContent
        />
    );
}

export default withReducer('dictsApp', reducer)(RoleApp);