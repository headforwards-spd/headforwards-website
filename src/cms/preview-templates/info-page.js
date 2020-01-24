import { func, shape, string, bool } from 'prop-types';
import React from 'react';
import { Provider } from 'unstated';
import * as uuid from 'uuid';
import { ImageSrcPropType } from '../../components/page-layout/image/image.component';
import Footer from '../../components/page-layout/footer/footer.component';
import Header from '../../components/page-layout/header/header.component';
import PageComponent from '../../components/page-components/page-component';
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
    const { title = '', subtitle, image, introduction, components, footerLinks: rawFooterLinks, callToAction } = data;
    const { show: showImage = false, image: bannerImageRef = null } = image || {};
    const bannerImage = bannerImageRef ? getAsset(bannerImageRef).toString() : null;

    const header = {
        title,
        subtitle,
        image: showImage ? bannerImage : null,
    };

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

    const { show: showIntro, text: introText } = introduction;

    const [footerLinks] = rawFooterLinks || {};
    const { showImages: showFooterImages } = footerLinks || {};

    console.log({rawFooterLinks, footerLinks});

    footerLinks && (footerLinks.links = [...Array(3)].map((v, k) => {
        return {
            showImages: showFooterImages,
            link: '/',
            title: `Link ${k + 1}`,
            image: { image: '/uploads/icon.black.png' },
            introduction: { text: 'Introduction...' },
        };
    }));

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
            <Footer {...{ footerLinks, companyInfo, callToAction }} />
        </Provider>
    );
}
