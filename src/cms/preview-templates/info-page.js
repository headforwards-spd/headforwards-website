import { func, shape, string } from 'prop-types';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Provider } from 'unstated';
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
    getAsset: func.isRequired,
};

function InfoPagePreview({ entry, getAsset }) {
    const { data } = entry.toJS();
    const { title = '', image: imageRef = null, introduction, components, callToAction } = data;
    const [{ title: introTitle, text: introText } = {}] = introduction || [];
    const image = imageRef ? getAsset(imageRef).toString() : null;

    const header = { title, image };

    !!components &&
        components.forEach(component => {
            const { image: cImage = null, imageOne = null, imageTwo = null, profilePic = null, articles } = component;
            component.id = uuid.v1();

            !!cImage && (component.image = getAsset(cImage).toString());
            !!imageOne && (component.imageOne = getAsset(imageOne).toString());
            !!imageTwo && (component.imageTwo = getAsset(imageTwo).toString());
            !!profilePic && (component.profilePic = getAsset(profilePic).toString());

            !!articles &&
                articles.forEach(article => {
                    const { image: aImage = null } = article;
                    article.id = uuid.v1();

                    !!aImage && (article.image = getAsset(aImage).toString());
                });
        });

    const companyInfo = {};
    const headerProps = {
        ...header,
        menu: [],
        companyInfo,
    };

    return (
        <Provider>
            <Header {...headerProps} />
            <main>
                {introText && (
                    <section className={styles.introduction}>
                        {introTitle && <h2>{introTitle}</h2>}
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
        </Provider>
    );
}
