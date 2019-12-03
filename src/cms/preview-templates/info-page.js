import { shape, string } from 'prop-types';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import * as uuid from 'uuid';
import { ImageSrcPropType } from '../../components/page-layout/image/image.component';
import Footer from '../../components/page-layout/footer/footer.component';
import Header from '../../components/page-layout/header/header.component';
import PageComponent from '../../components/page-components/page-component';
import styles from '../../components/page-templates/info-page/info-page.module.scss';

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

    const [{ title: introTitle, text: introText } = {}] = introduction || [];

    !!components &&
        components.forEach(component => {
            const { articles } = component;
            component.id = uuid.v1();

            !!articles &&
                articles.forEach(article => {
                    article.id = uuid.v1();
                });
        });

    const companyInfo = {};
    const headerProps = {
        ...header,
        menu: [],
        companyInfo,
    };

    return (
        <>
            <Header {...headerProps} />
            <main>
                {introText && (
                    <section className={styles.introduction}>
                        {introTitle && <h1>{introTitle}</h1>}
                        <ReactMarkdown source={introText} />
                    </section>
                )}
                {components && (
                    <section className={styles.components}>
                        {!!components &&
                            components.map(({ id, ...component }) => <PageComponent key={id} {...component} />)}
                    </section>
                )}
            </main>
            <Footer {...{ companyInfo, callToAction }} />
        </>
    );
}
