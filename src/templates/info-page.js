import { graphql } from 'gatsby';
import React from 'react';
import { shape, string, arrayOf, bool } from 'prop-types';
import { PageComponentPropType } from '../components/page-components/page-component';
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

function extractFooterLinks(footerLinks) {
    const [{ title, showImages, link1, link2, link3, page1, page2, page3 }] = footerLinks || [{}];

    if (!(link1 && link2 && link3)) {
        return null;
    }

    return {
        title,
        links: [
            { link: link1, page: page1 },
            { link: link2, page: page2 },
            { link: link3, page: page3 },
        ].map(({ link, page }) => {
            const { frontmatter } = page || {};

            return {
                showImages,
                link,
                ...frontmatter,
            };
        }),
    };
}
