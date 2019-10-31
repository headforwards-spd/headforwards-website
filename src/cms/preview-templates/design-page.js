import React, {Component, Fragment} from 'react';
import Header                       from '../../components/layout/header/header.component';
import getComponent                 from '../../lib/get-component';

export default class DesignPagePreview extends Component {
    render() {
        const {props, getComponentPreview} = this;
        const {entry}                 = props;
        const {data} = entry.toJS();
        const {title, navbar, components} = data;
        const header = {title, ...navbar};
        return (
            <Fragment>
                <Header {...header} />
                <section>{!!components && components.map(getComponentPreview)}</section>
            </Fragment>
        );
    }

    getComponentPreview(component, key) {

        return getComponent({
            ...component,
            key
        });
    }
}

