import React, {useEffect} from 'react';
import SearchHeader from './SearchHeader';
import SearchContent from './SearchContent';
import PageLayout from "../../components/pageLayout/PageLayout";
import {useDispatch} from "react-redux";
import * as Actions from "./store/actions";
import withReducer from "../../store/withReducer";
import reducer from "./store/reducers";

import './styles/search.scss';
function SearchApp() {
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(Actions.addSearchParam());
    // }, [dispatch]);
    return (
        <PageLayout
            header={<SearchHeader />}
            content={<SearchContent class="search"/>}
        />
    );
}

export default withReducer('searchApp', reducer)(SearchApp);