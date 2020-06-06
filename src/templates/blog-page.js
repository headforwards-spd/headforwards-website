import { graphql } from 'gatsby';
import { arrayOf, shape } from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet/es/Helmet';

import { PageComponentPropType } from '../components/page-components/page-component';
import { IntroductionProps } from '../components/page-layout/introduction/introduction.component';
import Layout, { extractLayoutProps } from '../components/page-layout/layout';
import { truncateString } from '../components/page-layout/markdown';
import BlogPageTemplate from '../components/page-templates/blog-page/blog-page.template';
import organisation from '../structured-data/organisation';

export default BlogPagePage;

BlogPagePage.propTypes = {
    data: shape({
        page: shape({
            frontmatter: shape({
                introduction: shape(IntroductionProps),
                components: arrayOf(PageComponentPropType),
            }),
        }),
    }).isRequired,
};

function BlogPagePage({ data }) {
    const { page } = data;
    const { fields, frontmatter, parent } = page;
    const { link: path } = fields || {};
    const { title, introduction, author: authorPage, components, publishedDate } = frontmatter || {};
    const { modifiedTime: dateModified } = parent;
    const {
        images: {
            frontmatter: { summary: rawImages },
        },
    } = data;

    const images = [];

    Object.keys(rawImages).forEach(key => {
        const { publicURL, childImageSharp: { fixed: { src } = {} } = {} } = rawImages[key];

        images.push(src || publicURL);
    });
    const layoutProps = extractLayoutProps(page);

    const { frontmatter: author } = authorPage || {};
    const pageProps = {
        title,
        introduction,
        author,
        publishedDate,
        components,
    };

    const { name: authorName } = author;
    const structuredDataProps = {
        path,
        title,
        image: images.filter(src => !!src).map(src => `https://www.headforwards.com${src}`),
        datePublished: publishedDate,
        dateModified,
        authorName,
        images,
    };

    return (
        <Layout {...layoutProps}>
            <Helmet>
                <script type="application/ld+json">{JSON.stringify(structuredData(structuredDataProps))}</script>
            </Helmet>
            <BlogPageTemplate {...pageProps} />
        </Layout>
    );
}

function structuredData({ path, title, datePublished, dateModified, authorName, image }) {
    const data = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://www.headforwards.com${path}`,
        },
        headline: truncateString(title, 110),
        image,
        datePublished,
        dateModified,
        author: {
            '@type': 'Person',
            name: authorName,
        },
        publisher: organisation,
    };

    return data;
}

export const query = graphql`
    query BlogPage($id: String!) {
        page: markdownRemark(id: { eq: $id }) {
            fields {
                link
            }
            frontmatter {
                ...PageFragment
            }
            parent {
                ... on File {
                    modifiedTime
                }
            }
        }
        images: markdownRemark(id: { eq: $id }) {
            frontmatter {
                summary {
                    image {
                        publicURL
                    }
                    square: image {
                        childImageSharp {
                            fixed(width: 768, height: 768) {
                                src
                            }
                        }
                    }
                    sd: image {
                        childImageSharp {
                            fixed(width: 1024, height: 768) {
                                src
                            }
                        }
                    }
                    hd: image {
                        childImageSharp {
                            fixed(width: 1366, height: 768) {
                                src
                            }
                        }
                    }
                }
            }
        }
    }
`;
