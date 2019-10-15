import React, {Component} from 'react';
import getComponent       from '../../helpers/get-component';

export default class DesignPagePreview extends Component {

    render() {

        const {props, getComponentPreview} = this;
        const {widgetsFor}                 = props;
        const components = widgetsFor('components');

        return (
            <section>{!!components && widgetsFor('components').map(getComponentPreview)}</section>
        );
    }

    getComponentPreview(component, key) {

        const {data} = component.toJS() || {};

        return getComponent({...data, key});
    }
}
