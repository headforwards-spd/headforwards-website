import { func, shape, string } from 'prop-types';
import React from 'react';
import { Provider } from 'unstated';
import * as uuid from 'uuid';

import Footer from '../../components/page-layout/footer/footer.component';
import Header from '../../components/page-layout/header/header.component';
import { ImageSrcPropType } from '../../components/page-layout/image/image.component';
import BlogPage from '../../components/page-templates/blog-page/blog-page.template';

export default BlogPagePreview;

BlogPagePreview.propTypes = {
    entry: shape({
        data: shape({
            title: string,
            subtitle: string,
            bannerImage: ImageSrcPropType,
            introduction: string,
            summary: shape({
                image: ImageSrcPropType,
                text: string,
            }),
            author: string,
        }),
    }).isRequired,
    fieldsMetaData: func.isRequired,
    getAsset: func.isRequired,
};

function BlogPagePreview({ entry, fieldsMetaData, getAsset }) {
    const { data } = entry.toJS();
    const authorId = entry.getIn(['data', 'author']);
    const authorMeta = fieldsMetaData.getIn(['author', 'author-pages', authorId]);
    const author = authorMeta ? authorMeta.toJS() : null;

    const {
        title = '',
        subtitle,
        bannerImage: bannerImageRef = null,
        introduction,
        publishedDate,
        components = [],
        footerLinks: rawFooterLinks,
        callToAction,
    } = data;
    const bannerImage = bannerImageRef ? getAsset(bannerImageRef).toString() : null;
    const [footerLinks] = rawFooterLinks || [];

    const header = {
        title,
        subtitle,
        image: bannerImage,
    };

    if (footerLinks) {
        const footerLinksArray = entry.getIn(['data', 'footerLinks']);
        const footerLinksValue = footerLinksArray ? footerLinksArray.get(0) : null;
        const footerLinksMeta = fieldsMetaData ? fieldsMetaData.getIn(['footerLinks'], footerLinksValue) : null;
        const link1 = footerLinksValue
            ? footerLinksMeta.getIn(['link1', 'info-pages', footerLinksValue.getIn(['link1'])])
            : null;
        const link2 = footerLinksValue
            ? footerLinksMeta.getIn(['link2', 'info-pages', footerLinksValue.getIn(['link2'])])
            : null;
        const link3 = footerLinksValue
            ? footerLinksMeta.getIn(['link3', 'info-pages', footerLinksValue.getIn(['link3'])])
            : null;

        const link1Page = link1 ? link1.toJS() : null;
        const link2Page = link2 ? link2.toJS() : null;
        const link3Page = link3 ? link3.toJS() : null;

        const { showImages = false } = footerLinks || {};

        footerLinks.links = [
            getFooterLink({
                showImages,
                page: link1Page,
            }),
            getFooterLink({
                showImages,
                page: link2Page,
            }),
            getFooterLink({
                showImages,
                page: link3Page,
            }),
        ];
    }

    components.forEach(component => setComponent(component, getAsset));

    const companyInfo = {};
    const headerProps = {
        ...header,
        menu: [],
        companyInfo,
    };

    const pageProps = {
        title,
        publishedDate,
        introduction,
        author,
        components,
    };

    return (
        <Provider>
            <Header {...headerProps} />
            <main>
                <BlogPage {...pageProps} />
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

function getFooterLink({ showImages, page }) {
    const { title = 'Link', summary } = page || {};
    const { image, text } = summary || {};

    return {
        showImages,
        link: '/',
        title,
        summary: {
            image: image || '/uploads/icon.black.png',
            text: text || 'Link text here...',
        },
    };
}
