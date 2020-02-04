// deprecated

import React, { Component } from 'react';
import RegionRow from '../components/region/RegionRow';
class RowComponent extends Component {
    components = {
        region: RegionRow
    };
    render() {
        const TagName = this.components[this.props.tag || 'foo'];
        return <TagName {...this.props }/>
    }
}
export default RowComponent;
