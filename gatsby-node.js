// const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');
const makeSlug = require('slug');

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
        .then(({ pages, posts, jobs }) => {
            createAllPages(createPage, pages);
            createAllPosts(createPage, posts);
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

        // const value = createFilePath({ node, getNode });
        return createNodeField({
            name: `slug`,
            node,
            value,
        });
    }
    return Promise.resolve();
};

function createAllPages(createPage, { nodes: pages = [] }) {
    return Promise.all(
        pages.map(({ id, fields, frontmatter }) => {
            const { slug: titleSlug } = fields;
            const { path, type, parent, seo } = frontmatter;
            const { slug: seoSlug } = seo || {};
            const slug = seoSlug || titleSlug;

            return createPage({
                path: type !== 'wordpress-page' ? `/${parent}/${slug}` : `/old${path}`,
                component: resolve(`src/templates/${type}.js`),
                context: { id },
            });
        })
    );
}

function createAllJobs(createPage, { nodes: jobs = [] }) {
    return Promise.all(
        jobs.map(({ id, type, path }) => {
            return createPage({
                path: `/careers/${path}`,
                component: resolve(`src/templates/${type}.js`),
                context: { id },
            });
        })
    );
}

function createAllPosts(createPage, { nodes: posts = [] }) {
    const firstIndex = 0;
    const lastIndex = posts.length - 1;

    return Promise.all(
        posts.map(({ id, frontmatter }, index) => {
            const { path, type } = frontmatter;

            const { id: prevId = '' } = index > firstIndex ? posts[index - 1] : {};
            const { id: nextId = '' } = index < lastIndex ? posts[index + 1] : {};

            return createPage({
                path,
                component: resolve(`src/templates/${type}.js`),
                context: { id, prevId, nextId },
            });
        })
    );
}

function getData(graphql) {
    return graphql(`
        {
            posts: allMarkdownRemark(
                filter: { frontmatter: { type: { eq: "wordpress-post" } } }
                sort: { fields: frontmatter___date, order: DESC }
            ) {
                nodes {
                    id
                    frontmatter {
                        type
                        path
                    }
                }
            }

            pages: allMarkdownRemark(filter: { frontmatter: { type: { in: ["wordpress-page", "info-page"] } } }) {
                nodes {
                    id
                    fields {
                        slug
                    }
                    frontmatter {
                        type
                        path
                        parent
                        seo {
                            slug
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
