const { fmImagesToRelative } = require('gatsby-remark-relative-images');
const makeSlug = require('slug');

const webpack = require(`webpack`);

const slugOptions = {
    replacement: '-',
    symbols: true,
    remove: /[.]/g,
    lower: true,
    charmap: makeSlug.charmap,
    multicharmap: makeSlug.multicharmap,
};

const { resolve } = require('path');

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;

    return getData(graphql)
        .then(({ data, errors }) => (!errors ? Promise.resolve(data) : Promise.reject(errors)))
        .then(({ indexPages, pages, jobs }) => {
            createAllIndexPages(createPage, indexPages);
            createAllPages(createPage, pages);
            createAllJobs(createPage, jobs);
        });
};

exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions;
    const { internal = null } = node;
    const { type } = internal;
    fmImagesToRelative(node); // convert image paths for gatsby images

    if (type === `MarkdownRemark`) {
        const { frontmatter } = node;
        const { title } = frontmatter;
        const value = makeSlug(title, slugOptions);

        return createNodeField({
            name: `slug`,
            node,
            value,
        });
    }
    return Promise.resolve();
};

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        plugins: [
            new webpack.IgnorePlugin({
                resourceRegExp: /^netlify-identity-widget$/,
            }),
        ],
    });
};

function createAllIndexPages(createPage, { menu: pages }) {
    const promises = [];

    pages.forEach(page => createIndexPage(createPage, promises, page));

    return Promise.all(promises);
}

function createIndexPage(createPage, promises, page) {
    const { uuid, linkText: title, link: path, children } = page;

    !!children &&
        promises.push(
            createPage({
                path,
                component: resolve(`src/templates/index-page.js`),
                context: {
                    uuid,
                    title,
                    children,
                },
            })
        );

    !!children && children.forEach(child => createIndexPage(createPage, promises, child));
}

function createAllPages(createPage, { nodes: pages = [] }) {
    return Promise.all(
        pages.map(({ id, fields, frontmatter }) => {
            const { slug: titleSlug } = fields;
            const { type, parent = '', seo, careers } = frontmatter;
            const { slug: seoSlug } = seo || {};
            const { department='' } = careers || {};
            const slug = seoSlug || titleSlug;
            const pagePath = `/${parent || ''}/${slug}`;

            return createPage({
                path: pagePath.replace(/\/+/g, '/'),
                component: resolve(`src/templates/${type}.js`),
                context: { id, department },
            });
        })
    );
}

function createAllJobs(createPage, { nodes: jobs = [] }) {
    const promises = [];

    jobs.forEach(({ id, path }) => {
        promises.push(
            createPage({
                path: `/careers/jobs/${path}`,
                component: resolve(`src/templates/job-page.js`),
                context: { id },
            })
        );
        promises.push(
            createPage({
                path: `/careers/jobs/${path}/application-form/`,
                component: resolve(`src/templates/application-form-page.js`),
                context: { id },
            })
        );
    });

    return Promise.all(promises);
}

function getData(graphql) {
    return graphql(`
        {
            indexPages: dataYaml(title: { eq: "main-menu" }) {
                menu {
                    uuid
                    link
                    linkText
                    children {
                        uuid
                        link
                        linkText
                        page {
                            frontmatter {
                                introduction {
                                    text
                                }
                                image {
                                    show
                                    image {
                                        publicURL
                                        childImageSharp {
                                            fluid(maxWidth: 1440, maxHeight: 1440, cropFocus: CENTER) {
                                                aspectRatio
                                                base64
                                                sizes
                                                src
                                                srcSet
                                                srcSetWebp
                                                srcWebp
                                            }
                                        }
                                    }
                                }
                                careers {
                                    department
                                }
                            }
                        }
                        children {
                            uuid
                            link
                            linkText
                            page {
                                frontmatter {
                                    introduction {
                                        text
                                    }
                                    image {
                                        show
                                        image {
                                            publicURL
                                            childImageSharp {
                                                fluid(maxWidth: 1440, maxHeight: 1440, cropFocus: CENTER) {
                                                    aspectRatio
                                                    base64
                                                    sizes
                                                    src
                                                    srcSet
                                                    srcSetWebp
                                                    srcWebp
                                                }
                                            }
                                        }
                                    }
                                    careers {
                                        department
                                    }
                                }
                            }
                        }
                    }
                }
            }

            pages: allMarkdownRemark(
                filter: { frontmatter: { type: { in: ["info-page", "legal-page", "home-page", "jobs-page"] } } }
            ) {
                nodes {
                    id
                    fields {
                        slug
                    }
                    frontmatter {
                        type
                        parent
                        seo {
                            slug
                        }
                        careers {
                            department
                        }
                    }
                }
            }

            jobs: allRecruiteeOffer(sort: { fields: created, order: DESC }) {
                nodes {
                    id
                    type
                    path
                }
            }
        }
    `);
}
