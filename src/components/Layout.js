import {graphql, useStaticQuery} from 'gatsby';
import React, {Fragment}         from 'react';
import Header                    from './header/header-component';
import './styles.scss';

const Layout = ({children, header}) => {

    const {data} = useStaticQuery(graphql`
        query {
            data: allDataYaml {
                edges {
                    node {
                        fields {
                            menu {
                                label
                                url
                                children {
                                    label
                                    url
                                    children {
                                        label
                                        url
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
  `);

    const {edges}  = data || {};
    const [edge]   = edges || [];
    const {node}   = edge || {};
    const {fields} = node || {};
    const {menu}   = fields || [];

    const {title, paragraph, image} = header || {};
    return (
        <Fragment>
            <Header {...{title, paragraph, image, menu}} />
            {children}
        </Fragment>
    );
};

export default Layout;


