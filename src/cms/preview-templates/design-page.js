import React, {Component}          from 'react'
import {FullWidthImage, TwoImages} from '../../components/images/images-component';
import {Quoteblock}                from '../../components/quoteblock/quoteblock-component';

export default class DesignPagePreview extends Component {

    render() {

        const {props, getComponent} = this;
        const { widgetsFor} = props;

        return (<section>{widgetsFor('components').map(getComponent)}</section>);
    }

    getComponent = (component) => {

        const {getAsset} = this.props;

        const type = component.getIn(['data', 'type']);
        switch(type) {
            case 'heading':
                return (<section style={{display: !!component.getIn(['data', 'twoColumns']) ? 'flex' : 'block'}}>
                    <h1>{component.getIn(['data', 'heading'])}</h1>
                    <p>{component.getIn(['data', 'description'])}</p>
                </section>);
            case 'fullWidthImageComponent':
                const image = component.getIn(['data', 'fullWidthImage']);
                const asset = image ? getAsset(image) : null;
                const {path} = asset || {};
                return (<FullWidthImage img={path}/>);
            case 'twoImageComponent':
                // const image = component.getIn(['data', 'fullWidthImage']);
                // const asset = image ? getAsset(image) : null;
                // const {path} = asset || {};
                return (<TwoImages/>);
            // case 'quoteBlockComponent':
            //     return <Quoteblock/>
            default:
                return (<p>{component.getIn(['data', 'text'])}</p>)
        }

    }
}
