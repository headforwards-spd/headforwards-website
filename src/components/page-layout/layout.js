import { graphql, Link, useStaticQuery } from 'gatsby';
import { arrayOf, bool, node, oneOfType, string } from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import { Provider } from 'unstated';
import withUnstated from '@airship/with-unstated';
import AppContainer from '../../containers/app.container';
import { ImageSrcPropType } from './image/image.component';
import Header from './header/header.component';
import Footer from './footer/footer.component';
import '../../scss/main.scss';
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
    text: string,
    callToAction: string,
    image: ImageSrcPropType,
    seo: SeoPropType,
    children: oneOfType([arrayOf(node), node, string]),
};
Layout.defaultProps = {
    isHomePage: false,
    text: null,
    image: null,
    children: null,
    seo: null,
    callToAction: null,
};
function Layout({ isHomePage, seo, title, text, image, children, callToAction: pageCallToAction }) {
    const { menuData, companyInfo } = useStaticQuery(graphql`
        query {
            menuData: dataYaml(title: { eq: "main-menu" }) {
                menu {
                    id
                    linkText
                    link
                    children {
                        id
                        linkText
                        link
                        children {
                            id
                            linkText
                            link
                        }
                    }
                }
            }
            companyInfo: dataYaml(title: { eq: "company-info" }) {
                companyName
                email
                phone
                address
                facebookURL
                instagramURL
                linkedInURL
                youtubeURL
                twitterURL
                registeredAddress
                callToAction
            }
        }
    `);
    const { menu } = menuData || [];

    const { callToAction: defaultCallToAction } = companyInfo;

    const headerProps = {
        isHomePage,
        title,
        text,
        image,
        menu,
        companyInfo,
    };

    const callToAction = pageCallToAction || defaultCallToAction;

    return (
        <Provider>
            <UnstatedHelmet />
            <Seo {...{ title, ...seo }} />
            <Header {...headerProps} />
            <main>{children}</main>
            <Footer {...{ companyInfo, callToAction }} />
            <section className="dev-links">
                <Link to="/recruitee-jobs">Recruitee Jobs</Link>
                <Link to="/wordpress-pages">Old WP Pages</Link>
                <Link to="/wordpress-posts">Old WP Posts</Link>
            </section>
        </Provider>
    );
}
