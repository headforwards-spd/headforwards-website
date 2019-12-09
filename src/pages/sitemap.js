/* eslint-disable */
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Layout from '../components/page-layout/layout';
import SitemapTemplate from '../components/page-templates/sitemap/sitemap.template';

export default Sitemap;

function Sitemap() {
    const props = {
        title: 'Sitemap.',
    };

    const { sitemap } = useStaticQuery(graphql`
        query {
            sitemap: allSitePage(sort: { fields: path }) {
                pathList: nodes {
                    path
                }
            }
        }
    `);

    return (
        <Layout {...props}>
            <SitemapTemplate {...{ sitemap }} />
        </Layout>
    );
}
/* eslint-enable */
