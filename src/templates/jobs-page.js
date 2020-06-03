import { graphql } from 'gatsby';
import { arrayOf, shape, string } from 'prop-types';
import React from 'react';

import { PageComponentPropType } from '../components/page-components/page-component';
import { IntroductionProps } from '../components/page-layout/introduction/introduction.component';
import Layout, { extractLayoutProps } from '../components/page-layout/layout';
import JobsPageTemplate from '../components/page-templates/jobs-page/jobs-page.template';

export default JobsPage;

JobsPage.propTypes = {
    data: shape({
        page: shape({
            frontmatter: shape({
                introduction: shape(IntroductionProps),
                components: arrayOf(PageComponentPropType),
                footerText: string,
            }),
        }),
        jobs: shape({
            nodes: arrayOf(
                shape({
                    id: string,
                    title: string,
                    path: string,
                    created: string,
                })
            ),
        }),
        filters: shape({
            departments: arrayOf(
                shape({
                    label: string.isRequired,
                    slug: string.isRequired,
                })
            ),
            tags: arrayOf(
                shape({
                    label: string.isRequired,
                    slug: string.isRequired,
                })
            ),
        }).isRequired,
        tags: shape({
            distinct: arrayOf(string),
        }).isRequired,
    }).isRequired,
};

function JobsPage({ data }) {
    const { page, jobNodes, filters, tags: tagData } = data;
    const { frontmatter } = page;

    const layoutProps = extractLayoutProps(page);

    const { introduction, components, footerText } = frontmatter;
    const { nodes: jobs } = jobNodes;
    const { distinct: tags } = tagData;
    const pageProps = {
        introduction,
        filters,
        tags,
        jobs,
        components,
        footerText,
    };

    return (
        <Layout {...layoutProps}>
            <JobsPageTemplate {...pageProps} />
        </Layout>
    );
}

export const query = graphql`
    query JobsPage($id: String!) {
        page: markdownRemark(id: { eq: $id }) {
            ...PageFragment
        }
        filters: dataYaml(title: { eq: "careers" }) {
            tags {
                label
                slug
            }
        }
        tags: allRecruiteeOffer {
            distinct(field: tags)
        }
        jobNodes: allRecruiteeOffer(
            sort: { fields: position, order: DESC }
            filter: { title: { regex: "/^((?!register).)*$/i" } }
        ) {
            nodes {
                id
                title
                salary
                path
                tags
                created(fromNow: true)
            }
        }
    }
`;
