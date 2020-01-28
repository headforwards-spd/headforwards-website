import { graphql } from 'gatsby';
import { arrayOf, bool, shape, string } from 'prop-types';
import React from 'react';

import { PageComponentPropType } from '../components/page-components/page-component';
import { extractFooterLinks } from '../components/page-layout/footer/footer-link.component';
import Layout from '../components/page-layout/layout';
import InfoPageTemplate from '../components/page-templates/info-page/info-page.template';

export default InfoPagePage;

InfoPagePage.propTypes = {
    data: shape({
        page: shape({
            frontmatter: shape({
                introduction: shape({
                    show: bool.isRequired,
                    text: string.isRequired,
                }),
                components: arrayOf(PageComponentPropType),
            }),
        }),
    }).isRequired,
};

function InfoPagePage({ data }) {
    const { page } = data;
    const { frontmatter } = page;
    const { introduction, components, footerLinks: rawFooterLinks, ...layoutProps } = frontmatter;
    const footerLinks = extractFooterLinks(rawFooterLinks);
    const pageProps = {
        introduction,
        components,
    };

    return (
        <Layout {...layoutProps} footerLinks={footerLinks}>
            <InfoPageTemplate {...pageProps} />
        </Layout>
    );
}

export const query = graphql`
    query InfoPage($id: String!) {
        page: markdownRemark(id: { eq: $id }) {
            ...PageFragment
        }
    }
`;
