import React, { useEffect } from 'react';
import PageLayout from "../../../../../components/pageLayout/PageLayout";
import {useDispatch, useSelector} from 'react-redux';
import * as Actions from '../../../store/actions';
import reducer from '../../../store/reducers';
import withReducer from "../../../../../store/withReducer";
import DictItemHeader from "../../../template/item/DictItemHeader";
import DictItemContent from "./DictItemContent";

import '../../../styles/styles.scss';


function DictItemApp(props) {
    const dispatch = useDispatch();

    const data = useSelector(({ dictsApp }) => dictsApp.dict.data);

    useEffect(() => {
        if (props.match.params.ID === 'new') {
            dispatch(Actions.createDictItem());
        } else {
            dispatch(Actions.getDiscount(props.match.params.ID));
        }
    }, [dispatch, props.match.params.ID]);

    return (
        <PageLayout
            header={data && <DictItemHeader
                url={"/discounts"}
                saveaction={Actions.saveDiscount()}
                title={"Скидки"}
                data={data} />}
            content={data && <DictItemContent data={data} />}
            userContent
        />
    );
}

export default withReducer('dictsApp', reducer)(DictItemApp);