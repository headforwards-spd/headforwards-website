import {graphql, useStaticQuery} from 'gatsby';
import React, {Fragment}         from 'react';
import Footer                    from './footer/footer-component';
import Header                    from './header/header-component';
import './styles.scss';

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

    const {title, paragraph, image} = header || {};
    return (
        <Fragment>
            <Header {...{
                title,
                paragraph,
                image,
                menu_data
            }} />
            {children}
            <Footer {...company_data} />

        </Fragment>
    );
};

export default Layout;


