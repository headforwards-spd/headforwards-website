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
        .then(({ indexPages, pages, jobs }) =>
            Promise.all([
                createAllIndexPages(createPage, indexPages),
                createAllPages(createPage, pages),
                createAllJobs(createPage, jobs),
            ])
        );
};

exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions;
    const { internal = null } = node;
    const { type } = internal;
    fmImagesToRelative(node); // convert image paths for gatsby images

    if (type === `MarkdownRemark`) {
        const { frontmatter } = node;
        const { title, name } = frontmatter;
        const value = makeSlug(title, slugOptions) || makeSlug(name, slugOptions);

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
    const isHomePage = path === '/';
    const hasChildren = !!children;
    const shouldBuild = !isHomePage && hasChildren;

    shouldBuild &&
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

    hasChildren && children.forEach(child => createIndexPage(createPage, promises, child));
}

function createAllPages(createPage, { nodes: pages = [] }) {
    return Promise.all(
        pages.map(({ id, fields, frontmatter }) => {
            const { slug: titleSlug } = fields;
            const { type, parent = '', seo, careers } = frontmatter;
            const { slug: seoSlug } = seo || {};
            const { department = '', tag } = careers || {};
            const slug = seoSlug || titleSlug;
            const pagePath = `/${parent || ''}/${slug}`;
            const tagRegex = tag ? `/${tag}/i` : '/.*/';

            return createPage({
                path: pagePath.replace(/\/+/g, '/'),
                component: resolve(`src/templates/${type}.js`),
                context: { id, department, tagRegex },
            });
        })
    );
}

function createAllJobs(createPage, { nodes: jobs = [] }) {
    const promises = [];

    jobs.forEach(({ id, path, title = '' }) => {
        const isRegister = title.toLowerCase().includes('register');
        const applyPath = !isRegister ? `jobs/${path}` : 'register-interest';

        !isRegister &&
            promises.push(
                createPage({
                    path: `/careers/jobs/${path}/`,
                    component: resolve(`src/templates/job-page.js`),
                    context: { id },
                })
            );
        promises.push(
            createPage({
                path: `/careers/${applyPath}/application-form/`,
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
                                summary {
                                    text
                                    image {
                                        publicURL
                                        childImageSharp {
                                            fluid(maxWidth: 564, maxHeight: 564, cropFocus: CENTER) {
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
                                    summary {
                                        text
                                        image {
                                            publicURL
                                            childImageSharp {
                                                fluid(maxWidth: 564, maxHeight: 564, cropFocus: CENTER) {
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
                                }
                            }
                        }
                    }
                }
            }

            pages: allMarkdownRemark(
                filter: {
                    frontmatter: {
                        type: {
                            in: [
                                "home-page"
                                "info-page"
                                "jobs-page"
                                "blog-index"
                                "blog-page"
                                "contact-page"
                                "legal-page"
                            ]
                        }
                    }
                }
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
                            tag
                        }
                    }
                }
            }

            jobs: allRecruiteeOffer(sort: { fields: created, order: DESC }) {
                nodes {
                    id
                    title
                    type
                    path
                }
            }
        }
    `);
}
