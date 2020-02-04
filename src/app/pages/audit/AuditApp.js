import React, { useEffect } from 'react';
import AuditHeader from './components/AuditHeader';
import AuditContent from './components/AuditContent';
import PageLayout from "../../components/pageLayout/PageLayout";
import {useDispatch} from 'react-redux';
import * as Actions from './store/actions';
import reducer from './store/reducers';
import withReducer from "../../store/withReducer";

import './styles/audit.scss';

function AuditApp() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(Actions.getAuditList());

        return () => {
            dispatch(Actions.clear());
        }
    }, [dispatch]);

    return (
        <PageLayout
            header={<AuditHeader />}
            content={<AuditContent />}
            userContent
        />
    );
}

export default withReducer('auditApp', reducer)(AuditApp);