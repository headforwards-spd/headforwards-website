import { bool, func, shape, string } from 'prop-types';
import React from 'react';
import { Provider } from 'unstated';
import * as uuid from 'uuid';

import PageComponent from '../../components/page-components/page-component';
import Footer from '../../components/page-layout/footer/footer.component';
import Header from '../../components/page-layout/header/header.component';
import { ImageSrcPropType } from '../../components/page-layout/image/image.component';
import IntroductionComponent from '../../components/page-layout/introduction/introduction.component';
import styles from '../../components/page-templates/info-page/info-page.module.scss';

export default InfoPagePreview;

InfoPagePreview.propTypes = {
    entry: shape({
        data: shape({
            title: string.isRequired,
            subtitle: string,
            image: shape({
                show: bool,
                image: ImageSrcPropType,
            }),
            introduction: shape({
                show: bool,
                text: string,
            }),
        }),
    }).isRequired,
    getAsset: func.isRequired,
};

function InfoPagePreview({ entry, getAsset }) {
    const { data } = entry.toJS();
    const {
        title = '',
        subtitle,
        image,
        introduction,
        components = [],
        footerLinks: rawFooterLinks,
        callToAction,
    } = data;
    const { show: showImage = false, image: bannerImageRef = null } = image || {};
    const bannerImage = bannerImageRef ? getAsset(bannerImageRef).toString() : null;

    const header = {
        title,
        subtitle,
        image: showImage ? bannerImage : null,
    };

    components.forEach(component => setComponent(component, getAsset));

    const companyInfo = {};
    const headerProps = {
        ...header,
        menu: [],
        companyInfo,
    };

    const { show: showIntro, text: introText } = introduction;

    const [footerLinks] = rawFooterLinks || {};
    const { showImages: showFooterImages } = footerLinks || {};

    footerLinks && setFooterLinks(footerLinks, showFooterImages);

    return (
        <Provider>
            <Header {...headerProps} />
            <main>
                {showIntro && <IntroductionComponent introduction={introText} />}
                {components && (
                    <section className={styles.components}>
                        {!!components &&
                            components.map(({ id, ...component }) => <PageComponent key={id} {...component} />)}
                    </section>
                )}
            </main>
            <Footer
                {...{
                    footerLinks,
                    companyInfo,
                    callToAction,
                }}
            />
        </Provider>
    );
}

function setArticle(article, getAsset) {
    const { image: aImage = null } = article;
    article.id = uuid.v1();

    article.image = aImage ? getAsset(aImage).toString() : !!aImage;
}

function setComponent(component, getAsset) {
    const { image: cImage = null, imageOne = null, imageTwo = null, profilePic = null, articles = [] } = component;
    component.id = uuid.v1();

    component.image = cImage ? getAsset(cImage).toString() : cImage;
    component.imageOne = imageOne ? getAsset(imageOne).toString() : imageOne;
    component.imageTwo = imageTwo ? getAsset(imageTwo).toString() : imageTwo;
    component.profilePic = profilePic ? getAsset(profilePic).toString() : profilePic;

    articles.forEach(article => setArticle(article, getAsset));
}

function setFooterLinks(footerLinks, showImages) {
    footerLinks.links = [...Array(3)].map((v, k) => {
        return {
            showImages,
            link: '/',
            title: `Link ${k + 1}`,
            image: { image: '/uploads/icon.black.png' },
            introduction: { text: 'Introduction...' },
        };
    });
}
