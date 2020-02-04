import React, { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import * as Actions from '../../store/actions';
import PageLayout from "../../../../components/pageLayout/PageLayout";
import DictHeader from "../../template/DictHeader";
import DictContent from "../../template/DictContent";
import withReducer from "../../../../store/withReducer";
import reducer from "../../store/reducers";

import {headerRows} from "./ProviderHeader";

import ProviderRow from "./ProviderRow";
import '../../styles/styles.scss';
function ProviderApp() {
    const dispatch = useDispatch()
    const providerRow = ProviderRow;
    dispatch(Actions.clearData());
    useEffect(() => {
        dispatch(Actions.getProviderList());
    }, [dispatch]);

    return (
        <PageLayout
            header={<DictHeader
                title="Контент-провайдеры"
                 newurl="/provider/new" />}
            content={<DictContent
                tablerow = {providerRow}
                headerrow={headerRows}
                baseurl={"/provider"}/>}
            userContent
        />
    );
}

export default withReducer('dictsApp', reducer)(ProviderApp);