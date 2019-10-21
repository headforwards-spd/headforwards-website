import {graphql, useStaticQuery} from 'gatsby';
import React, {Fragment}         from 'react';
import Footer                    from './footer/footer-component';
import Header                    from './header/header-component';
import './styles.scss';

const Layout = ({children, header}) => {

    const {data} = useStaticQuery(graphql`
        query {
            data: dataYaml(title: {eq: "main-menu"}) {
                menu {
                    children {
                        label
                        link
                    }
                    label
                    link
                }
            }
        }
  `);
    const {menu} = data || [];

    const {title, paragraph, image} = header || {};
    return (
        <Fragment>
            <Header {...{
                title,
                paragraph,
                image,
                menu
            }} />
            {children}
            <Footer />
        </Fragment>
    );
};

export default Layout;


