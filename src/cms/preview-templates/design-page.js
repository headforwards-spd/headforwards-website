import React, {Component}          from 'react'
import {HeaderText}                from '../../components/header-text/header-text-component';
import {ImageHeader}               from '../../components/image-header-text-link/image-header-text-link-component';
import {FullWidthImage, TwoImages} from '../../components/images/images-component';
import {Quoteblock}                from '../../components/quoteblock/quoteblock-component';
import {Article}                   from '../../components/article-block/article-block-component';

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

                const headerProps = {
                    bool: !!component.getIn(['data', 'twoColumns']) ? 'flexGrow' : 'noGrow',
                    header: component.getIn(['data', 'heading']),
                    sentence: component.getIn(['data', 'description'])
                };
                return <HeaderText {...headerProps} />

            case 'fullWidthImageComponent':
                const image = component.getIn(['data', 'fullWidthImage']);
                const asset = image ? getAsset(image) : null;
                const {path} = asset || {};
                return (<FullWidthImage img={path}/>);

            case 'twoImageComponent':

                const leftImage = component.getIn(['data', 'leftImage']);
                const leftImgAsset = leftImage ? getAsset(leftImage) : null;
                const {path: leftImgPath} = leftImgAsset || {};

                const rightImage = component.getIn(['data', 'rightImage']);
                const rightImgAsset = rightImage ? getAsset(rightImage) : null;
                const {path: rightImgPath} = rightImgAsset|| {};

                const props = {leftImg: leftImgPath, rightImg: rightImgPath};

                return (<TwoImages {...props}/>);

            case 'blockQuoteComponent':
                const quoteProps = {
                    name:     component.getIn(['data', 'name']),
                    jobTitle: component.getIn(['data', 'jobTitle']),
                    quote:    component.getIn(['data', 'quote']),
                    image:    component.getIn(['data', 'profilePic'])
                };
                return (<Quoteblock {...quoteProps} />);

            case 'imageWithTextComponent':
                const imgWithTextProps = {
                        header: component.getIn(['data', 'header']),
                        sentence: component.getIn(['data', 'sentence']),
                        position: component.getIn(['data', 'position']),
                        image: component.getIn(['data', 'image']),
                        linkText: component.getIn(['data', 'linkText']),
                        linkDestination: component.getIn(['data', 'linkDestination'])
                };
                return (<ImageHeader {...imgWithTextProps} />);

            case 'articleBlockComponent':
                return (<Article/>);

            default:
                return (<p>{component.getIn(['data', 'text'])}</p>)
        }

    }
}
