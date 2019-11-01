import { shape, string } from 'prop-types';
import React, { Fragment } from 'react';
import * as uuid from 'uuid';
import { ImageSrcPropType } from '../../components/image/image.component';
import Footer from '../../components/page-layout/footer/footer.component';
import Header from '../../components/page-layout/header/header.component';
import PageComponent from '../../components/page-components/page-component';

export default DesignPagePreview;

DesignPagePreview.propTypes = {
    entry: shape({
        data: shape({
            title: string.isRequired,
            header: shape({
                text: string,
                image: ImageSrcPropType,
            }),
        }),
    }).isRequired,
};

function DesignPagePreview({ entry }) {
    const { data } = entry.toJS();
    const { title, header: pageHeader, components } = data;
    const header = { title, ...pageHeader };
    const menu = [];
    const companyInfo = {};
    return (
        <Fragment>
            <Header {...{ ...header, menu, companyInfo }} />
            <main>{!!components && components.map(component => <PageComponent key={uuid.v1()} {...component} />)}</main>
            <Footer {...{ companyInfo }} />
        </Fragment>
    );
}
