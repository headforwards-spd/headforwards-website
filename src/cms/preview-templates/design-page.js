import React, {Component} from 'react'

export default class DesignPagePreview extends Component {

    render() {

        const {props, getComponent} = this;
        const { widgetsFor} = props;

        return (<section>{widgetsFor('components').map(getComponent)}</section>);
    }

    getComponent(component) {

        const type = component.getIn(['data', 'type']);
        switch(type) {
            case 'heading':
                return (<section style={{display: !!component.getIn(['data', 'twoColumns']) ? 'flex' : 'block'}}>
                    <h1>{component.getIn(['data', 'heading'])}</h1>
                    <p>{component.getIn(['data', 'description'])}</p>
                </section>);
            default:
                return (<p>{component.getIn(['data', 'text'])}</p>)
        }

    }
}
