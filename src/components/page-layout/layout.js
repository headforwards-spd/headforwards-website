import '../../scss/main.scss';

import withUnstated from '@airship/with-unstated';
import { graphql, useStaticQuery } from 'gatsby';
import { arrayOf, bool, node, oneOfType, shape, string } from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import { Provider } from 'unstated';

import AppContainer from '../../containers/app.container';
import { FooterLinkPropType } from './footer/footer-link.component';
import Footer from './footer/footer.component';
import Header from './header/header.component';
import { ImageSrcPropType } from './image/image.component';
import JobHeader from './job-header/job-header.component';
import Seo, { SeoPropType } from './seo';

export default Layout;

const UnstatedHelmet = withUnstated(
    ({ appContainer }) => {
        const { menuIsOpen } = appContainer.state;
        const bodyAttributes = {
            class: menuIsOpen ? 'menuIsOpen' : '',
        };

        return (
            <Helmet bodyAttributes={bodyAttributes}>
                <link rel="preload" href="/fonts/FSAlbertWeb/Bold.woff2" as="font" />
                <link rel="preload" href="/fonts/FSAlbertWeb/Regular.woff2" as="font" />
                <link rel="preload" href="/fonts/FSAlbertWeb/Italic.woff2" as="font" />
            </Helmet>
        );
    },
    { appContainer: AppContainer }
);

Layout.propTypes = {
    isHomePage: bool,
    title: string.isRequired,
    subtitle: string,
    jobDetails: shape({
        salary: string.isRequired,
        tags: arrayOf(string).isRequired,
        path: string.isRequired,
    }),
    footerLinks: shape({
        title: string,
        links: arrayOf(FooterLinkPropType),
    }),
    callToAction: string,
    image: shape({
        show: bool,
        image: ImageSrcPropType,
    }),
    seo: SeoPropType,
    children: oneOfType([arrayOf(node), node, string]),
};
Layout.defaultProps = {
    isHomePage: false,
    subtitle: null,
    jobDetails: null,
    image: null,
    children: null,
    seo: null,
    footerLinks: null,
    callToAction: null,
};
function Layout({
    isHomePage,
    seo,
    title,
    subtitle,
    jobDetails,
    image,
    children,
    footerLinks,
    callToAction: pageCallToAction,
}) {
    const { menuData, companyInfo } = useStaticQuery(graphql`
        query {
            menuData: dataYaml(title: { eq: "main-menu" }) {
                ...MenuFragment
            }
            companyInfo: dataYaml(title: { eq: "company-info" }) {
                ...CompanyInfoFragment
            }
        }
    `);
    const { title: seoTitle = null } = seo || {};
    const { menu } = menuData || [];
    const isJobPage = !!jobDetails;

    const { callToAction: defaultCallToAction } = companyInfo;

    const { show: showImage, image: bannerImage } = image || {};

    const headerProps = {
        isHomePage,
        title,
        subtitle,
        image: showImage ? bannerImage : null,
        menu,
        companyInfo,
    };

    const seoProps = {
        ...seo,
        title: seoTitle || title,
    };

    const callToAction = pageCallToAction || defaultCallToAction;

    const footerProps = { footerLinks, companyInfo, callToAction };

    return (
        <Provider>
            <UnstatedHelmet />
            <Seo {...seoProps} />
            {(!isJobPage && <Header {...headerProps} />) || <JobHeader {...headerProps} jobDetails={jobDetails} />}
            <main>{children}</main>
            <Footer {...footerProps} />
        </Provider>
    );
}
