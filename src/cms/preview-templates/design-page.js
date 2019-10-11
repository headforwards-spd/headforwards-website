import React, {Component}          from 'react';
import getComponent from '../../helpers/get-components';

export default class DesignPagePreview extends Component {

    render() {

        const {props} = this;
        const {widgetsFor, getAsset}          = props;

        return (
            <section>{widgetsFor('components').map((component) => getComponent({component, getAsset}))}</section>
        );
    }
}
