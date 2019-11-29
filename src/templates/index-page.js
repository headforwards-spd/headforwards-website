import { node, shape } from 'prop-types';
import React from 'react';
import Layout from '../components/page-layout/layout';
import IndexPageTemplate from '../components/page-templates/index-page/index-page.template';

const indexPagePropTypes = {
    pageContext: shape({
        children: node,
    }),
};

export default IndexPage;

IndexPage.propTypes = indexPagePropTypes;
IndexPage.defaultProps = {
    pageContext: { children: null },
};

function IndexPage({ pageContext }) {
    const { children: pages, ...header } = pageContext;

    return (
        <Layout {...header}>
            <IndexPageTemplate {...{ pages }} />
        </Layout>
    );
}
