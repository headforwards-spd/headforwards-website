import { shape, string } from 'prop-types';
import React, { Fragment } from 'react';
import { ImagePropType } from '../../components/image/image.component';
import Header from '../../components/layout/header/header.component';
import PageComponent from '../../components/page-components/page-component';

export default DesignPagePreview;

DesignPagePreview.propTypes = {
    entry: shape({
        data: shape({
            title: string.isRequired,
            header: shape({
                text: string,
                image: ImagePropType,
            }),
        }),
    }).isRequired,
};

function DesignPagePreview({ entry }) {
    const { data } = entry.toJS();
    const { title, header: pageHeader, components } = data;
    const header = { title, ...pageHeader };
    return (
        <Fragment>
            <Header {...header} />
            <section>
                {!!components && components.map((component, key) => <PageComponent key={key} {...component} />)}
            </section>
        </Fragment>
    );
}
