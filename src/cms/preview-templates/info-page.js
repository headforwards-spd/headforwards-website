import { shape, string } from 'prop-types';
import React from 'react';
import * as uuid from 'uuid';
import { ImageSrcPropType } from '../../components/page-layout/image/image.component';
import Footer from '../../components/page-layout/footer/footer.component';
import Header from '../../components/page-layout/header/header.component';
import PageComponent from '../../components/page-components/page-component';

export default InfoPagePreview;

InfoPagePreview.propTypes = {
    entry: shape({
        data: shape({
            title: string.isRequired,
            text: string,
            image: ImageSrcPropType,
        }),
    }).isRequired,
};

function InfoPagePreview({ entry }) {
    const { data } = entry.toJS();
    const { title = '', image = null, introduction, components, callToAction } = data;
    const header = { title, image };

    !!components &&
        components.forEach(component => {
            const { articles } = component;
            component.id = uuid.v1();

            !!articles &&
                articles.forEach(article => {
                    article.id = uuid.v1();
                });
        });

    const companyInfo = { callToAction };
    const headerProps = {
        ...header,
        menu: [],
        companyInfo,
    };

    return (
        <>
            <Header {...headerProps} />
            <main>{!!components && components.map(component => <PageComponent key={uuid.v1()} {...component} />)}</main>
            <Footer {...{ companyInfo }} />
        </>
    );
}
