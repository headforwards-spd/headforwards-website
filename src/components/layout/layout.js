import {graphql, useStaticQuery} from 'gatsby';
import React, {Fragment}         from 'react';
import Header                    from './header/header.component';
import Footer                    from './footer/footer.component';
import '../../scss/main.scss';

const Layout = ({children, header}) => {

    const {menuData, companyData} = useStaticQuery(graphql`
        query {
            menuData: dataYaml(title: {eq: "main-menu"}) {
                menu {
                    children {
                        linkText
                        link
                    }
                    linkText
                    link
                }
            }
            companyData: dataYaml(title: {eq: "company-info"}) {
                companyInfo {
                        email
                        address
                        phone
                        facebookURL
                        twitterURL
                        instaURL
                        youtubeURL
                    }
            }
        }
  `);
    const {menu} = menuData || [];
    const {companyInfo} = companyData || [];
    const {title, text, image} = header || {};

    const headerProps = {
        title,
        text,
        image,
        menu,
        companyInfo
    };

    console.log({headerProps});

    return (
        <Fragment>
            <Header {...headerProps} />
            <main>{children}</main>
            <Footer {...{companyInfo}} />
        </Fragment>
    );
};

export default Layout;


