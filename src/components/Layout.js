import {graphql, useStaticQuery} from 'gatsby';
import React, {Fragment}         from 'react';
import './styles.scss';
import Navbar from '../components/navbar/navbar-component';

const TemplateWrapper = ({children}) => {
    const {data} = useStaticQuery(graphql`
    query MyQuery {
      data: allDataYaml {
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
  `);

    const {edges}      = data || {};
    const [edge]       = edges || [];
    const {node}       = edge || {};
    const {items = []} = node;



    return (
        <Fragment>
            <Navbar {...{items}} />
            {children}
        </Fragment>
    );
};

export default TemplateWrapper;
