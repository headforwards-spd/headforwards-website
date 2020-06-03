import '../../scss/main.scss';

import withUnstated from '@airship/with-unstated';
import { Location } from '@reach/router';
import { graphql, useStaticQuery } from 'gatsby';
import { arrayOf, bool, node, oneOfType, shape, string } from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import { Provider } from 'unstated';

import AppContainer from '../../containers/app.container';
import CovidBanner from './covid-banner/covid-banner.component';
import { extractFooterLinks, FooterLinkPropType } from './footer/footer-link.component';
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
    bannerImage: ImageSrcPropType,
    title: string.isRequired,
    subtitle: string,
    summary: shape({
        seoImage: ImageSrcPropType,
        text: string,
    }).isRequired,
    jobDetails: shape({
        salary: string,
        path: string.isRequired,
    }),
    footerLinks: shape({
        title: string,
        links: arrayOf(FooterLinkPropType),
    }),
    callToAction: string,
    seo: SeoPropType,
    children: oneOfType([arrayOf(node), node, string]),
};
Layout.defaultProps = {
    isHomePage: false,
    bannerImage: null,
    subtitle: null,
    jobDetails: null,
    children: null,
    seo: null,
    footerLinks: null,
    callToAction: null,
};

function Layout({
    isHomePage,
    seo,
    bannerImage,
    title,
    summary,
    subtitle,
    jobDetails,
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

    const headerProps = {
        isHomePage,
        title,
        subtitle,
        image: bannerImage,
        menu,
        companyInfo,
    };

    const { text: description, seoImage } = summary || {};

    const seoProps = {
        ...seo,
        image: seoImage || defaultSeoImage,
        title: seoTitle || title,
        description: seoDescription || (isJobPage ? subtitle : description),
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
            <CovidBanner />
        </Provider>
    );
}

export function extractLayoutProps({ frontmatter }) {
    const {
        isHomePage,
        bannerImage,
        title,
        subtitle,
        summary,
        careers,
        footerLinks: rawFooterLinks,
        callToAction,
        seo,
    } = frontmatter || {};
    const { applicationForm } = careers || {};
    const jobDetails = applicationForm ? { path: `/careers/${applicationForm}` } : null;
    const footerLinks = extractFooterLinks(rawFooterLinks);

    return {
        isHomePage,
        bannerImage,
        title,
        subtitle,
        summary,
        jobDetails,
        footerLinks,
        callToAction,
        seo,
    };
}
