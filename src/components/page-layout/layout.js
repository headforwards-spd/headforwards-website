import { graphql, useStaticQuery } from 'gatsby';
import { arrayOf, node, oneOf, string } from 'prop-types';
import React, { Fragment } from 'react';
import { ImageSrcPropType } from '../image/image.component';
import Header from './header/header.component';
import Footer from './footer/footer.component';
import '../../scss/main.scss';

export default Layout;

Layout.propTypes = {
    title: string.isRequired,
    text: string,
    image: ImageSrcPropType,
    children: oneOf([arrayOf(node), node, string]),
};
Layout.defaultProps = {
    text: null,
    image: null,
    children: null,
};
function Layout({ title, text, image, children }) {
    const { menuData, companyData } = useStaticQuery(graphql`
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
            companyData: dataYaml(title: { eq: "company-info" }) {
                companyInfo {
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
        }
    `);
    const { menu } = menuData || [];
    const { companyInfo } = companyData || [];

    const headerProps = {
        title,
        text,
        image,
        menu,
        companyInfo,
    };

    return (
        <Fragment>
            <Header {...headerProps} />
            <main>{children}</main>
            <Footer {...{ companyInfo }} />
        </Fragment>
    );
}
