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

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions;
    const typeDefs = `
type MarkdownRemark implements Node {
  frontmatter: MarkdownRemarkFrontmatter
}
type MarkdownRemarkFrontmatter {
  author: MarkdownRemark @link(by: "frontmatter.uuid", from: "author")
  footerLinks: [FooterLinks]
}
type DataYaml implements Node {
  menu: [MenuItem]
}
type MarkdownRemarkFrontmatterSections {
  id: ID
}
type FooterLinks {
    title: String
    showImages: Boolean
    link1: String
    link2: String
    link3: String
    page1: MarkdownRemark @link(by: "frontmatter.uuid", from: "link1")
    page2: MarkdownRemark @link(by: "frontmatter.uuid", from: "link2")
    page3: MarkdownRemark @link(by: "frontmatter.uuid", from: "link3")
}
type MenuItem {
    linkText: String
    page: MarkdownRemark @link(by: "frontmatter.uuid", from: "page")
    children: [MenuItem]
}
  `;
    createTypes(typeDefs);
};

exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions;
    const { internal = null } = node;
    const { type } = internal;
    fmImagesToRelative(node); // convert image paths for gatsby images

    if (type === `MarkdownRemark` || type === `MarkdownRemark`) {
        const { frontmatter } = node;
        const { parent, title, name, seo } = frontmatter;
        const { slug: seoSlug } = seo || {};
        const pageSlug = makeSlug(name || title, slugOptions);
        const slug = seoSlug || pageSlug;
        const link = `/${parent || ''}/${slug || ''}/`.replace(/\/+/g, '/');

        return createNodeField({
            name: `link`,
            node,
            value: link,
        });
    }
    return Promise.resolve();
};

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

function createIndexPage(createPage, promises, indexPage) {
    const { linkText: title, page, children } = indexPage;
    const { fields, frontmatter } = page;
    const { link } = fields;
    const { uuid } = frontmatter;
    const isHomePage = link === '/';
    const hasChildren = !!children;
    const shouldBuild = !isHomePage && hasChildren;

    shouldBuild &&
        promises.push(
            createPage({
                path: link,
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
            const { link: path } = fields;
            const { type, careers } = frontmatter;
            const { department = '', tag } = careers || {};
            const tagRegex = tag ? `/${tag}/i` : '/.*/';

            return createPage({
                path,
                component: resolve(`src/templates/${type}.js`),
                context: { id, department, tagRegex },
            });
        })
    );
}

function createAllJobs(createPage, { nodes: jobs = [] }) {
    const promises = [];

    jobs.forEach(job => {
        const { id, title, slug } = job;
        const isRegister = (title || '').toLowerCase().includes('register');
        const applySlug = !isRegister ? `jobs/${slug}` : 'register-interest';

        !isRegister && promises.push(createRegisterPage(createPage, id, slug));
        promises.push(createApplicationFormPage(createPage, id, applySlug));
    });

    return Promise.all(promises);
}

function createRegisterPage(createPage, id, slug) {
    const path = `/careers/jobs/${slug}/`;
    return createPage({
        path,
        component: resolve(`src/templates/job-page.js`),
        context: { id },
    });
}

function createApplicationFormPage(createPage, id, slug) {
    const path = `/careers/${slug}/application-form/`;
    return createPage({
        path,
        component: resolve(`src/templates/application-form-page.js`),
        context: { id },
    });
}

function getData(graphql) {
    return graphql(`
        {
            indexPages: dataYaml(title: { eq: "main-menu" }) {
                menu {
                    linkText
                    page {
                        id
                        fields {
                            link
                        }
                        frontmatter {
                            uuid
                        }
                    }
                    children {
                        linkText
                        page {
                            id
                            fields {
                                link
                            }
                            frontmatter {
                                uuid
                                title
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
                            linkText
                            page {
                                id
                                fields {
                                    link
                                }
                                frontmatter {
                                    uuid
                                    title
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
                        link
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
                    slug: path
                }
            }
        }
    `);
}
