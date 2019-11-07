import { graphql, useStaticQuery } from 'gatsby';
import { arrayOf, node, oneOfType, string } from 'prop-types';
import React, { Fragment } from 'react';
import { ImageSrcPropType } from '../image/image.component';
import Header from './header/header.component';
import Footer from './footer/footer.component';
import '../../scss/main.scss';
import Seo, { SeoPropType } from './seo';

export default Layout;

Layout.propTypes = {
    title: string.isRequired,
    text: string,
    image: ImageSrcPropType,
    seo: SeoPropType,
    children: oneOfType([arrayOf(node), node, string]),
};
Layout.defaultProps = {
    text: null,
    image: null,
    children: null,
    seo: { title: null },
};
function Layout({ seo, title, text, image, children }) {
    const { menuData, companyInfo } = useStaticQuery(graphql`
        query {
            menuData: dataYaml(title: { eq: "main-menu" }) {
                menu {
                    linkText
                    link
                    children {
                        linkText
                        link
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
            }
        }
    `);
    const { menu } = menuData || [];

    const headerProps = {
        title,
        text,
        image,
        menu,
        companyInfo,
    };

    return (
        <Fragment>
            <Seo {...{ title, ...seo }} />
            <Header {...headerProps} />
            <main>{children}</main>
            <Footer {...{ companyInfo }} />
        </Fragment>
    );
}
