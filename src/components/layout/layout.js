import { graphql, useStaticQuery } from 'gatsby';
import { arrayOf, node, oneOf, shape, string } from 'prop-types';
import React, { Fragment } from 'react';
import { ImagePropType } from '../image/image.component';
import Header from './header/header.component';
import Footer from './footer/footer.component';
import '../../scss/main.scss';

export default Layout;

Layout.propTypes = {
    header: shape({
        title: string.isRequired,
        text: string,
        image: ImagePropType,
    }).isRequired,
    children: oneOf([arrayOf(node), node, string]),
};
Layout.defaultProps = {
    children: null,
};
function Layout({ children, header }) {
    const { menuData, companyData } = useStaticQuery(graphql`
        query {
            menuData: dataYaml(title: { eq: "main-menu" }) {
                menu {
                    children {
                        linkText
                        link
                    }
                    linkText
                    link
                }
            }
            companyData: dataYaml(title: { eq: "company-info" }) {
                companyInfo {
                    email
                    address
                    phone
                    twitterURL
                    facebookURL
                    instagramURL
                    linkedInURL
                }
            }
        }
    `);
    const { menu } = menuData || [];
    const { companyInfo } = companyData || [];
    const { title, text, image } = header || {};

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
