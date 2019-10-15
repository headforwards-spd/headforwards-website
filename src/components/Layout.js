import {graphql, useStaticQuery} from 'gatsby';
import React, {Fragment}         from 'react';
import './styles.scss';
import Navbar from '../components/navbar/navbar-component';

const TemplateWrapper = ({children}) => {
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

    const {edges}   = data || {};
    const [edge]    = edges || [];
    const {node}    = edge || {};
    const {fields}  = node || {};
    const {menu=[]} = fields || {};
    return (
        <Fragment>
            <Navbar {...{menu}} />
            {children}
        </Fragment>
    );
};

export default TemplateWrapper;
