import {graphql, useStaticQuery} from 'gatsby';
import React, {Fragment}         from 'react';

import './styles.scss';

const TemplateWrapper = ({children}) => {

    const {edges} = useStaticQuery(
        graphql`
        query {
            allDataYaml {
                edges {
                    node {
                        id
                        items {
                            label
                            link
                            children {
                                label
                                link
                                children {
                                    label
                                    link
                                 }
                            }
                        }
                    }
                }
            }
        }
        
    `)
    console.log(edges);
    return (
        <Fragment>
            <nav>
                <ul>
                    <li></li>
                </ul>
            </nav>
            {children}
        </Fragment>
    );
};

export default TemplateWrapper;
