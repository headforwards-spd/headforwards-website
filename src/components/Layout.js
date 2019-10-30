import {graphql, useStaticQuery} from 'gatsby';
import React, {Fragment}         from 'react';
import Footer                    from './footer/footer-component';
import Header                    from './header/header-component';
import '../scss/main.scss';

const Layout = ({children, header}) => {

    const {menu_data, company_data} = useStaticQuery(graphql`
        query {
            menu_data: dataYaml(title: {eq: "main-menu"}) {
                menu {
                    children {
                        label
                        link
                    }
                    label
                    link
                }
            }
            company_data: dataYaml(title: {eq: "company-info"}) {
                company_info {
                        email
                        address
                        number
                        facebookURL
                        twitterURL
                        instaURL
                        youtubeURL
                    }
            }
        }
  `);
    const {menu} = menu_data || [];
    const {company_info} = company_data || [];


    const {title, paragraph, image} = header || {};
    return (
        <Fragment>
            <Header {...{
                title,
                paragraph,
                image,
                menu,
                company_info
            }} />
            {children}
            <Footer {...{company_info}} />

        </Fragment>
    );
};

export default Layout;


