import {useDispatch} from "react-redux";
import React, {useEffect} from "react";
import * as Actions from "../../store/actions";
import PageLayout from "../../../../components/pageLayout/PageLayout";

import withReducer from "../../../../store/withReducer";
import reducer from "../../store/reducers";
import DictHeader from "../../template/DictHeader";
import DictContent from "../../template/DictContent";
import UserRow from "./UserRow";
import {headerRows} from "./UserHeader";
import '../../styles/styles.scss';
function UserApp() {
    const dispatch = useDispatch()
    const rows = UserRow;
    dispatch(Actions.clearData());

    useEffect(() => {
        dispatch(Actions.getUserList());
    }, [dispatch]);

    return (
        <PageLayout
            header={<DictHeader
                title="Пользователи"
                newurl="/user/new"/>}
            content={<DictContent
                        // tablerow = "region"
                        tablerow = {rows}
                        headerrow={headerRows}
                        baseurl={"/user"}/>}
            userContent
        />
    );
}

export default withReducer('dictsApp', reducer)(UserApp);