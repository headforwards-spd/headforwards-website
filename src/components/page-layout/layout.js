import '../../scss/main.scss';

import withUnstated from '@airship/with-unstated';
import { Location } from '@reach/router';
import { graphql, useStaticQuery } from 'gatsby';
import { arrayOf, bool, node, oneOfType, shape, string } from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import { Provider } from 'unstated';

import AppContainer from '../../containers/app.container';
import CookieBar from './cookie-bar/cookie-bar.component';
import { FooterLinkPropType } from './footer/footer-link.component';
import Footer from './footer/footer.component';
import Header from './header/header.component';
import JobHeader from './header/job-header.component';
import { ImageSrcPropType } from './image/image.component';
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
                {/* <linkFields rel="preload" href="/fonts/FSAlbertWeb/Bold.woff2" as="font" /> */}
                {/* <linkFields rel="preload" href="/fonts/FSAlbertWeb/Regular.woff2" as="font" /> */}
                {/* <linkFields rel="preload" href="/fonts/FSAlbertWeb/Italic.woff2" as="font" /> */}
                <link rel="preconnect" href="https://www.google.com" />
                <link rel="preconnect" href="https://www.facebook.com" />
                <link rel="preconnect" href="https://www.googletagmanager.com" />
                <link rel="preconnect" href="https://d.adroll.mgr.consensu.org" />
                <link rel="preconnect" href="https://d.adroll.com" />
                <link rel="preconnect" href="https://googleads.g.doubleclick.net" />
                <link rel="preconnect" href="https://www.google-analytics.com" />
                <link rel="preconnect" href="https://connect.facebook.net" />
                <link rel="preconnect" href="https://vc.hotjar.io" />
            </Helmet>
        );
    },
    { appContainer: AppContainer }
);

Layout.propTypes = {
    isHomePage: bool,
    title: string.isRequired,
    subtitle: string,
    introduction: shape({
        show: bool.isRequired,
        text: string,
    }),
    jobDetails: shape({
        salary: string,
        tags: arrayOf(string),
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
    introduction: null,
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
    introduction,
    subtitle,
    jobDetails,
    image,
    children,
    footerLinks,
    callToAction: pageCallToAction,
}) {
    const { menuData, companyInfo, seoImage: defaultSeoImage } = useStaticQuery(
        graphql`
            query {
                seoImage: file(name: { eq: "icon" }) {
                    childImageSharp {
                        fixed(width: 1200, height: 630, fit: CONTAIN, quality: 85, background: "white") {
                            src
                            width
                            height
                        }
                    }
                }
                menuData: dataYaml(title: { eq: "main-menu" }) {
                    ...MenuFragment
                }
                companyInfo: dataYaml(title: { eq: "company-info" }) {
                    ...CompanyInfoFragment
                }
            }
        `
    );
    const { title: seoTitle = null, description: seoDescription = null } = seo || {};
    const { menu } = menuData || [];
    const isJobPage = !!jobDetails;

    const { callToAction: defaultCallToAction } = companyInfo;

    const { show: showImage, image: bannerImage, seoImage } = image || {};

    const headerProps = {
        isHomePage,
        title,
        subtitle,
        image: showImage ? bannerImage : null,
        menu,
        companyInfo,
    };

    const { text: description } = introduction || {};

    const seoProps = {
        ...seo,
        image: seoImage || defaultSeoImage,
        title: seoTitle || title,
        description: seoDescription || (isJobPage ? subtitle : description),
        bannerImage,
    };

    const callToAction = pageCallToAction || defaultCallToAction;

    const footerProps = {
        footerLinks,
        companyInfo,
        callToAction,
    };

    return (
        <Provider>
            <UnstatedHelmet />
            <Location>{({ location }) => <Seo {...seoProps} location={location} />}</Location>
            {(!isJobPage && <Header {...headerProps} />) || <JobHeader {...headerProps} jobDetails={jobDetails} />}
            <main>{children}</main>
            <Footer {...footerProps} />
            <CookieBar />
        </Provider>
    );
}
