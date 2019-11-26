import { graphql, Link, useStaticQuery } from 'gatsby';
import { arrayOf, node, oneOfType, string } from 'prop-types';
import React from 'react';
import { ImageSrcPropType } from './image/image.component';
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
    seo: null,
};
function Layout({ seo, title, text, image, children }) {
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
        <>
            <Seo {...{ title, ...seo }} />
            <Header {...headerProps} />
            <main>{children}</main>
            <Footer {...{ companyInfo }} />
            <section className="dev-links">
                <Link to="/recruitee-jobs">Recruitee Jobs</Link>
                <Link to="/wordpress-pages">Old WP Pages</Link>
                <Link to="/wordpress-posts">Old WP Posts</Link>
            </section>
        </>
    );
}
