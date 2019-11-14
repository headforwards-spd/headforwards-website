const gatsbyPluginSass = require('./gatsby/gatsby-plugin-sass');
// const gatsbySourceWordpress = require('./gatsby/gatsby-source-wordpress');
// const gatsbySourceFilesystemWordpress = require('./gatsby/gatsby-source-filesystem.wp-content');
const gatsbySourceFilesystemUploads = require('./gatsby/gatsby-source-filesystem.uploads');
const gatsbySourceFilesystemPages = require('./gatsby/gatsby-source-filesystem.pages');
const gatsbyTransformerRemark = require('./gatsby/gatsby-transformer-remark');
const gatsbyPluginManifest = require('./gatsby/gatsby-plugin-manifest');
const gatsbyPluginNetlifyCms = require('./gatsby/gatsby-plugin-netlify-cms');
const gatsbyPluginSitemap = require('./gatsby/gatsby-plugin-sitemap');
const gatsbyPluginRobotsTxt = require('./gatsby/gatsby-plugin-robots-txt');
const gatsbyPluginOffline = require('./gatsby/gatsby-plugin-offline');

module.exports = {
    siteMetadata: {
        siteUrl: `https://headforwards-website.netlify.com`,
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        { ...gatsbyPluginSass },
        `gatsby-plugin-svgr`,
        'gatsby-plugin-sharp',
        // Import WordPress Posts
        // { ...gatsbySourceWordpress },
        // Use WordPress Images
        // { ...gatsbySourceFilesystemWordpress },
        { ...gatsbySourceFilesystemUploads },
        { ...gatsbySourceFilesystemPages },
        'gatsby-transformer-sharp',
        { ...gatsbyTransformerRemark },
        'gatsby-transformer-yaml',
        'gatsby-transformer-json',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `./src/data`,
            },
        },
        `gatsby-transformer-remark-linked-pages`,
        `gatsby-transformer-yaml-menu`, // must be after other CSS plugins
        { ...gatsbyPluginManifest },
        { ...gatsbyPluginOffline },
        { ...gatsbyPluginNetlifyCms }, // make sure to keep it last in the array
        { ...gatsbyPluginSitemap },
        { ...gatsbyPluginRobotsTxt },
        `gatsby-plugin-netlify-cache`,
        'gatsby-plugin-netlify',
    ],
};
